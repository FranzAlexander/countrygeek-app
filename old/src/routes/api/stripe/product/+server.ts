import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

import Stripe from 'stripe';
import { upsertProduct } from '$lib/server/supabaseAdmin';

const stripe = new Stripe(
	'pk_live_51N13N6Bl6RuBTaaa2Kd5UfN8ZHA4ZRl9cqjsHOo1tssQyQotDgcWRlmdnV2plQJMLXxgkVs8rJakbgmgD1RPvCUW00DOL12K3I',
	{ apiVersion: '2022-11-15' }
);

const endpointSecret = 'whsec_G8QrClrh45qVsHK9pwOSroL30iIXhAOk';
const cryptoProvider = Stripe.createSubtleCryptoProvider();

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.text();
	let event: Stripe.Event;
	const signature = request.headers.get('stripe-signature');
	if (endpointSecret) {
		event = await stripe.webhooks.constructEventAsync(
			body,
			signature!,
			endpointSecret,
			undefined,
			cryptoProvider
		);
		try {
			switch (event.type) {
				case 'product.created':
				case 'product.updated':
					await upsertProduct(event.data.object as Stripe.Product);
					break;
			}
		} catch (err) {
			return json(400);
		}
	}

	return json(200);
};
