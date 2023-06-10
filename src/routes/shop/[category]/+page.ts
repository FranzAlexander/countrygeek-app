import type { ShopCategoryWithSub } from '$lib/interfaces/shop';
import type { PageLoad } from './$types';

export const load = (async ({ parent, params }) => {
	const categoryName = decodeURIComponent(params.category.replaceAll(/-/g, ' '));

	const subCategories: ShopCategoryWithSub[] = (await parent()).categories.filter(function (
		el: ShopCategoryWithSub
	) {
		return categoryName.indexOf(el.name) >= 0;
	});

	return { categoryName: categoryName, subCategories: subCategories[0].subCategories };
}) satisfies PageLoad;
