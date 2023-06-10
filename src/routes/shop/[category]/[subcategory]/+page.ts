import type { ShopCategoryWithSub } from '$lib/interfaces/shop';
import type { PageLoad } from './$types';

export const load = (async ({ parent, fetch, params }) => {
	const categoryName = decodeURIComponent(params.category.replaceAll(/-/g, ' '));

	const response = await fetch('/api/product', {
		method: 'POST',
		body: JSON.stringify({ categoryName }),
		headers: {
			'content-type': 'application/json'
		}
	});

	const products = await response.json();

	const subCategories: ShopCategoryWithSub[] = (await parent()).categories.filter(function (
		el: ShopCategoryWithSub
	) {
		return categoryName.indexOf(el.name) >= 0;
	});

	return {
		products: products,
		categoryName: categoryName,
		subCategories: subCategories[0].subCategories
	};
}) satisfies PageLoad;
