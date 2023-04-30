import type { shopCategories } from '$lib/interfaces/shop';
import type { LayoutServerLoad } from '../$types';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../../database.types';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';

export const load: LayoutServerLoad = async ({ locals: { supabase } }) => {
	const supabaseAdmin = createClient<Database>(
		PUBLIC_SUPABASE_URL,
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZseW5nZWl1ZmxsaGtzdm1pcmxlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTYzNjI2NiwiZXhwIjoxOTk1MjEyMjY2fQ.jkNm6Dy5KxsMC9B447aHiG7lvwFlu4Jm0jWrvgqXzbk'
	);

	const { data } = await supabaseAdmin.from('shop_categories').select('*');

	console.log(data);

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
