import { createClient } from '@supabase/supabase-js';
import type { Database } from '../../database.types';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import type Stripe from 'stripe';
import type { Price, Product } from '$lib/interfaces/shop';

const supabaseAdmin = createClient<Database>(
	PUBLIC_SUPABASE_URL || '',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZseW5nZWl1ZmxsaGtzdm1pcmxlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTYzNjI2NiwiZXhwIjoxOTk1MjEyMjY2fQ.jkNm6Dy5KxsMC9B447aHiG7lvwFlu4Jm0jWrvgqXzbk' ||
		''
);

export const upsertProduct = async (product: Stripe.Product) => {
	const data: Product = {
		id: product.id,
		active: product.active,
		name: product.name,
		description: product.description ?? undefined,
		images: product.images ?? null,
		metadata: product.metadata
	};
	const { error } = await supabaseAdmin.from('products').upsert([data]);
	if (error) throw error;
};

export const upsertPrice = async (price: Stripe.Price) => {
	const data: Price = {
		id: price.id,
		product_id: typeof price.product === 'string' ? price.product : '',
		active: price.active,
		currency: price.currency,
		description: price.nickname ?? undefined,
		type: price.type,
		unit_amount: price.unit_amount ?? undefined,
		interval: price.recurring?.interval,
		interval_count: price.recurring?.interval_count,
		trial_period_days: price.recurring?.trial_period_days,
		metadata: price.metadata
	};

	const { error } = await supabaseAdmin.from('prices').upsert([data]);
	if (error) throw error;
};
