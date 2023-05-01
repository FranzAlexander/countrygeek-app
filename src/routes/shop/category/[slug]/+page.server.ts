import type { displayItem } from '$lib/interfaces/shop';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, locals: { supabase } }) => {
	const name = url.pathname.split('/').at(-1)?.replaceAll('-', ' ');
	const { data: item } = await supabase
		.from('products')
		.select('name, description, images, prices(unit_amount)')
		.eq('metadata->>Category', name)
		.as<itemDisplay>();
	console.log(item);

	let displayItem: displayItem;

	if (item) {
		let image = '';
		if (item?.images[0]) {
			image = item[0].images[0];
		}
		displayItem = {
			name: item[0].name,
			description: item[0].description,
			images: image,
			unit_amount: item[0].prices.unit_amount
		};
	}

	// const { data: items } = await supabase
	// 	.from('shop_categories')
	// 	.select('shop_items(name, description, amount)')
	// 	.eq('name', name)
	// 	.range(0, 9);

	// let displayItems: displayItem[] = [];

	// if (items) {
	// 	for (let i = 0; i < items.length; i += 1) {
	// 		console.log(items[i]);
	// 	}
	// }
};









