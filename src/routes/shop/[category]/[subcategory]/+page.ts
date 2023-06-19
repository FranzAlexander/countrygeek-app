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

	console.log(products);

	const subCategories: ShopCategoryWithSub[] = (await parent()).categories.filter(function (
		el: ShopCategoryWithSub
	) {
		return categoryName.indexOf(el.name) >= 0;
	});

	const specFiltersResponse = await fetch('/api/spec', {
		method: 'POST',
		body: JSON.stringify({ subCategoryId: 1 }),
		headers: {
			'content-type': 'application/json'
		}
	});

	const specFilters = await specFiltersResponse.json();

	console.log(specFilters);

	return {
		products: products,
		categoryName: categoryName,
		subCategories: subCategories[0].subCategories,
		specFilters: specFilters
	};
}) satisfies PageLoad;
