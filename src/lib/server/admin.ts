import stripe from './stripe';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../../supabase';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import { PRIVATE_SUPABASE_KEY } from '$env/static/private';

export const supabaseAdmin = createClient<Database, 'public', any>(
	PUBLIC_SUPABASE_URL,
	PRIVATE_SUPABASE_KEY
);

export async function createStripeProduct(name: string, price: number): Promise<string> {
	const newStripeProduct = await stripe.products.create({ name });
	await stripe.prices.create({
		product: newStripeProduct.id,
		currency: 'aud',
		billing_scheme: 'per_unit',
		unit_amount: price
	});

	return new Promise<string>((resolve, reject) => {
		resolve(newStripeProduct.id);
	});
}
