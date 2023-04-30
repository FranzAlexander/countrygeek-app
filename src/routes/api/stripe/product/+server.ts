import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../../../../database.types';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import Stripe from 'stripe';
import type { StripeProduct } from '$lib/interfaces/stripe';



export const POST: RequestHandler = async ({ request }) => {
	const stripe = new Stripe(
		'pk_live_51N13N6Bl6RuBTaaa2Kd5UfN8ZHA4ZRl9cqjsHOo1tssQyQotDgcWRlmdnV2plQJMLXxgkVs8rJakbgmgD1RPvCUW00DOL12K3I',
		{ apiVersion: '2022-11-15' }
	);

	const supabaseAdmin = createClient<Database>(
		PUBLIC_SUPABASE_URL,
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZseW5nZWl1ZmxsaGtzdm1pcmxlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTYzNjI2NiwiZXhwIjoxOTk1MjEyMjY2fQ.jkNm6Dy5KxsMC9B447aHiG7lvwFlu4Jm0jWrvgqXzbk'
	);

	const endpointSecret = 'whsec_WhNzKCBqkxQRrcvISMIKFRUlAuq6vObU';
		const body = await request.text();

		if (endpointSecret) {
			const signature = request.headers.get('stripe-signature');
			let receviedEvent;
			try {
				receviedEvent = await stripe.webhooks.constructEventAsync(
					body,
					signature!,
					endpointSecret,
					undefined,
					undefined
				);
			} catch (err) {
				console.log(`⚠️  Webhook signature verification failed.`, err);
				return json(400);
			}

			switch (receviedEvent.type) {
				case 'product.created':
					const newProduct = receviedEvent.data.object as StripeProduct;
					const { data, error } = await supabaseAdmin.from('products').insert([
						{
							id: newProduct.id,
							active: newProduct.active,
							name: newProduct.name,
							description: newProduct.description,
							metadata: newProduct.metadata
						}
					]);
					return json(200);
			}
		}

	return json(200);
};
