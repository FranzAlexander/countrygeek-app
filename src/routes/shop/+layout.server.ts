import type { ShopCategoryWithSub, SubCategory } from '$lib/interfaces/shop';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals: { supabase } }) => {
	const { data: shop_categories } = await supabase.from('category').select(`*, sub_cateogry(*)`);

	console.log(shop_categories);

	if (!shop_categories) {
		return [];
	}

	// const shopCategories: ShopCategoryWithSub[] = shop_categories.map((category) => {
	// 	const subCategories = category.shop_sub_categories.map((subCategory: SubCategory) => ({
	// 		id: subCategory.id,
	// 		name: subCategory.name,
	// 		icon: subCategory.icon
	// 	}));

	// 	return {
	// 		id: category.id,
	// 		name: category.name,
	// 		subCategories: subCategories
	// 	};
	// });

	return { categories: '' };
};
