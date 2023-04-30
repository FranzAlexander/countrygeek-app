import type { displayItem } from '$lib/interfaces/shop';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, locals: { supabase } }) => {
	const name = url.pathname.split('/').at(-1)?.replaceAll('-', ' ');

	const { data: items } = await supabase
		.from('shop_categories')
		.select('shop_items(name, description, amount)')
		.eq('name', name)
		.range(0, 9);

	let displayItems: displayItem[] = [];

	if (items) {
		for (let i = 0; i < items.length; i += 1) {
			console.log(items[i]);
		}
	}
};
