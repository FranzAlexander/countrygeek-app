import Stripe from 'stripe';
import type { RequestHandler } from './$types';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../../../../database.types';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import type { StripePrice } from '$lib/interfaces/stripe';
import { json } from '@sveltejs/kit';

const stripe = new Stripe(
	'pk_live_51N13N6Bl6RuBTaaa2Kd5UfN8ZHA4ZRl9cqjsHOo1tssQyQotDgcWRlmdnV2plQJMLXxgkVs8rJakbgmgD1RPvCUW00DOL12K3I',
	{ apiVersion: '2022-11-15' }
);

const supabaseAdmin = createClient<Database>(
	PUBLIC_SUPABASE_URL,
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZseW5nZWl1ZmxsaGtzdm1pcmxlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTYzNjI2NiwiZXhwIjoxOTk1MjEyMjY2fQ.jkNm6Dy5KxsMC9B447aHiG7lvwFlu4Jm0jWrvgqXzbk'
);

const endpointSecret = 'whsec_t0ODw2hAzEzWOXth8FE9XFEu5Xebix3Y';

const cryptoProvider = Stripe.createSubtleCryptoProvider();
export const POST: RequestHandler = async ({ request }) => {
	const body = await request.text();
	let receviedEvent;

	if (endpointSecret) {
		const signature = request.headers.get('stripe-signature');
		try {
			receviedEvent = await stripe.webhooks.constructEventAsync(
				body,
				signature!,
				endpointSecret,
				undefined,
				cryptoProvider
			);
		} catch (err) {
			console.log(`⚠️  Webhook signature verification failed.`, err);
			return json(400);
		}
	}
	if (receviedEvent) {
		switch (receviedEvent.type) {
			case 'price.created':
				const newPrice = receviedEvent.data.object as StripePrice;
				await supabaseAdmin.from('prices').insert([
					{
						id: newPrice.id,
						product_id: newPrice.product,
						active: newPrice.active,
						unit_amount: newPrice.unit_amount,
						currency: newPrice.currency,
						type: newPrice.type,
						metadata: newPrice.metadata
					}
				]);
				return json(200);
		}
	}

	return json(200);
};
