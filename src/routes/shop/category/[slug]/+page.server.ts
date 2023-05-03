import type { DisplayItem } from '$lib/interfaces/shop';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, locals: { supabase } }) => {
	const category = url.pathname.split('/').at(-1)?.replaceAll('-', ' ');

	if (!category) {
		return fail(404);
	}

	const { data: products, error } = await supabase
		.from('products')
		.select('name, description, images, prices(unit_amount)')
		.eq('metadata->>Category', category);

	if (error) {
		return fail(404);
	}

	const displayItems: DisplayItem[] =
		products?.map((product) => {
			const image = product.images?.[0] ?? '';

			let unit_amount: number | null = null;
			if (Array.isArray(product.prices)) {
				const [price] = product.prices;
				if (price?.unit_amount) {
					unit_amount = price.unit_amount;
				}
			} else if (product.prices?.unit_amount) {
				unit_amount = product.prices.unit_amount;
			}

			return {
				name: product.name ?? null,
				description: product.description ?? null,
				image: image ?? '',
				unit_amount: unit_amount! / 100 ?? null
			};
		}) ?? [];

	console.log(displayItems);

	return { displayItems };
};
