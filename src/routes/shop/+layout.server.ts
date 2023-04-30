import type { shopCategories } from '$lib/interfaces/shop';
import { loadStripe } from '@stripe/stripe-js';
// const stripe = require('stripe')(
// 	'sk_test_51N13N6Bl6RuBTaaaDXMmsEmBsF5OfOlcfg1xYkc4ndTsisZTLU2fJnzG0EogBR2Q0s7ibftgww3dZqZ6dK4fIo8b00WQ8c20pr'
// );

import type { LayoutServerLoad } from '../$types';

export const load: LayoutServerLoad = async ({ locals: { supabase } }) => {
	const stripe = await loadStripe(
		'sk_test_51N13N6Bl6RuBTaaaDXMmsEmBsF5OfOlcfg1xYkc4ndTsisZTLU2fJnzG0EogBR2Q0s7ibftgww3dZqZ6dK4fIo8b00WQ8c20pr'
	);

	// const product = await stripe.products.retrieve('prod_NnkL02Sh2URiRr');
	// console.log(product);
	// const response = await supabase.from('shop_categories').select('*');

	let categories: shopCategories[] = [];

	// if (response.data) {
	// 	for (let i = 0; i < response.data.length; i += 1) {
	// 		categories[i] = {
	// 			id: response.data[i].id,
	// 			name: response.data[i].name,
	// 			list_order: response.data[0].list_order
	// 		};
	// 	}
	// }
	// try {
	// 	const response = await client.catalogApi.searchCatalogItems({});
	// 	if (response.result.items) {
	// 		console.log(response.result.items[0]?.itemData?.variations);
	// 	}
	// } catch (error) {
	// 	console.log(error);
	// }

	return { categories: categories };
	// try {
	// 	const response = await client.catalogApi.listCatalog('', 'category');
	// 	if (response.result.objects) {
	// 		console.log(response.result.objects);
	// 	}
	// } catch (error) {
	// 	console.log(error);
	// }
};
