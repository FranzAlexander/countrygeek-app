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

export interface StripePrice {
	id: string;
	object: string;
	active: boolean;
	automatic_currency_conversion_eligible: boolean;
	billing_scheme: string;
	created: number;
	currency: string;
	custom_unit_amount: number | null;
	livemode: boolean;
	lookup_key: string | null;
	metadata: Record<string, any> | null;
	never_used: boolean;
	nickname: string | null;
	owning_merchant: string;
	owning_merchant_info: string;
	product: string;
	recurring: Record<string, unknown> | null;
	tax_behavior: string;
	tiers_mode: string | null;
	transform_quantity: Record<string, unknown> | null;
	type: 'one_time' | 'recurring' | null | undefined;
	unit_amount: number;
	unit_amount_decimal: string;
}