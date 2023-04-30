import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '../../../../database.types';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';

const stripe = require('stripe')(
	'sk_test_51N13N6Bl6RuBTaaaDXMmsEmBsF5OfOlcfg1xYkc4ndTsisZTLU2fJnzG0EogBR2Q0s7ibftgww3dZqZ6dK4fIo8b00WQ8c20pr'
);

const endpointSecret = 'whsec_WhNzKCBqkxQRrcvISMIKFRUlAuq6vObU';

const supabaseAdmin = new SupabaseClient<Database>(
	PUBLIC_SUPABASE_URL,
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZseW5nZWl1ZmxsaGtzdm1pcmxlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTYzNjI2NiwiZXhwIjoxOTk1MjEyMjY2fQ.jkNm6Dy5KxsMC9B447aHiG7lvwFlu4Jm0jWrvgqXzbk'
);

export const POST: RequestHandler = async ({ request }) => {
	if (endpointSecret) {
		const signature = request.headers.get('stripe-signature');
		let receviedEvent;
		try {
			receviedEvent = await stripe.webhooks.constructEvent(request.body, signature, endpointSecret);
		} catch (err) {
			console.log(`⚠️  Webhook signature verification failed.`, err);
			return json(400);
		}

		switch (receviedEvent.type) {
			case 'product.created':
				const newProduct = receviedEvent.data.object;
				// supabaseAdmin.from('products');
				console.log('HI');
				return json(200);
		}
	}

	return json(200);
};
