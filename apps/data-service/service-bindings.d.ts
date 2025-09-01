interface DestinationStatusEvaluationParams {
	linkId: string;
	destinationUrl: string;
	accountId: string;
}

interface Env extends Cloudflare.Env {
	DESTINATION_EVALUATION: Workflow<DestinationStatusEvaluationParams>;
}
