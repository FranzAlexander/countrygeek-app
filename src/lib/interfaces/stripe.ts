export interface StripeProduct {
	id: string;
	object: 'product';
	active: boolean;
	attributes: string[];
	caption: string | null;
	created: number;
	deactivate_on: string[];
	description: string | null;
	images: string[];
	livemode: boolean;
	metadata: Record<string, any> | null;
	name: string;
	package_dimensions: {
		height: number | null;
		length: number | null;
		weight: number | null;
		width: number | null;
	} | null;
	shippable: boolean | null;
	statement_descriptor: string | null;
	type: 'good' | 'service';
	unit_label: string | null;
	updated: number;
	url: string | null;
}
