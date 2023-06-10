import type { Product } from '$lib/interfaces/shop';
import type { PageLoad } from './$types';

export const load = (async ({ parent, params }) => {
	// const productData: Product[] = (await parent()).filter(function (el: Product) {
	// 	return;
	// });
}) satisfies PageLoad;
