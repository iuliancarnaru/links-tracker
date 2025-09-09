import { Hono } from 'hono';
import { cloudflareInfoSchema } from '@repo/data-ops/zod-schema/links';
import { captureLinkClickInBackground, getDestinationForCountry, getRoutingDestinations } from '@/helpers/route-ops';
import { LinkClickMessageType } from '@repo/data-ops/zod-schema/queue';

export const App = new Hono<{ Bindings: Env }>();

App.get('/click-socket', async (c) => {
	const upgradeHeader = c.req.header('Upgrade');
	if (!upgradeHeader || upgradeHeader !== 'websocket') {
		return c.text('Expected Upgrade: websocket', 426);
	}

	const accountId = c.req.header('account-id');
	if (!accountId) return c.text('No Headers', 404);
	const doId = c.env.LINK_CLICK_TRACKER.idFromName(accountId);
	const stub = c.env.LINK_CLICK_TRACKER.get(doId);
	return await stub.fetch(c.req.raw);
});

App.get('/r/:id', async (c) => {
	const id = c.req.param('id');
	if (!id) {
		return c.text('id not found', 404);
	}

	const linkInfo = await getRoutingDestinations(c.env, id);
	if (!linkInfo) {
		return c.text('Destination not found', 404);
	}

	const cfHeader = cloudflareInfoSchema.safeParse(c.req.raw.cf);
	if (!cfHeader.success) {
		return c.text('Invalid Cloudflare headers', 400);
	}

	const headers = cfHeader.data;
	const destination = getDestinationForCountry(linkInfo, headers.country);

	const queueMessage: LinkClickMessageType = {
		type: 'LINK_CLICK',
		data: {
			id,
			destination,
			accountId: linkInfo.accountId,
			country: headers.country,
			latitude: headers.latitude,
			longitude: headers.longitude,
			timestamp: new Date().toISOString(),
		},
	};

	c.executionCtx.waitUntil(captureLinkClickInBackground(c.env, queueMessage));

	return c.redirect(destination);
});
