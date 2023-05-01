import type Stripe from 'stripe';

export interface shopCategories {
	id: number;
	name: string | null;
	list_order: number | null;
}

export interface displayItem {
	name: string | null;
	description: string | null;
	unit_amount: string | null;
	images: string | null;
}

export interface Product {
	id: string;
	active?: boolean;
	name?: string;
	description?: string;
	images?: string[];
	metadata?: Stripe.Metadata;
}

export interface Price {
	id: string;
	product_id: string;
	active?: boolean;
	description?: string;
	unit_amount?: number;
	currency?: string;
	type?: Stripe.Price.Type;
	interval?: Stripe.Price.Recurring.Interval;
	interval_count?: number;
	trial_period_days?: number | null;
	metadata: Stripe.Metadata;
}
