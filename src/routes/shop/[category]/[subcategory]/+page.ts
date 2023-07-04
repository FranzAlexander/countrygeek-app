import type { CategorySubcategory, ShopCategoryWithSub } from '$lib/interfaces/category';
import type { PageLoad } from './$types';

export const load = (async ({ params, fetch, parent }) => {
	// Save the original params
	const rawCategoryName = params.category;
	const rawSubCategoryName = params.subcategory;

	// Transform the params
	const categoryName = decodeURIComponent(rawCategoryName.replace(/-/g, ' '));

	const subCategoryName =
		rawSubCategoryName !== 'All-in-one'
			? decodeURIComponent(rawSubCategoryName.replace(/-/g, ' '))
			: 'All-in-one';

	// Get the list of categories and their sub categories from parent data loaded in from layout.ts.
	const categories: ShopCategoryWithSub[] = (await parent()).categories;

	// Find the category from the list based on the param name.
	const category = categories.find((cat) => cat.name === categoryName);

	// Get the category id.
	const categoryId = category?.id;

	// Declare the sub category id. This can be a string or null.
	let subCategoryId: number | null = null;

	if (category && subCategoryName !== 'all') {
		const subCategory = category.subCategories.find((subCat) => subCat.name === subCategoryName);

		if (subCategory) {
			subCategoryId = subCategory.id;
		}
	}

	const response = await fetch('/api/product', {
		method: 'POST',
		body: JSON.stringify({
			categoryId: categoryId,
			subCategoryId: subCategoryId,
			offset: 0,
			limit: 6
		} as CategorySubcategory),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const specResponse = await fetch('/api/spec', {
		method: 'POST',
		body: JSON.stringify({ subCategoryId: subCategoryId }),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const products = await response.json();
	const specFilters = await specResponse.json();
	console.log(specFilters);

	return {
		products: products,
		category: category,
		specFilters: specFilters,
		subCategory: subCategoryName
	};
}) satisfies PageLoad;
