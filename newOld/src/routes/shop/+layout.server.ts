import type { ShopCategoryWithSub, SubCategory } from '$lib/interfaces/shop';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals: { supabase } }) => {
	const { data: categoryData } = await supabase.from('category').select('*, sub_category(*)');

	if (!categoryData) {
		return [];
	}

	const categories: ShopCategoryWithSub[] = categoryData.map((category) => ({
		id: category.id,
		name: category.name,
		subCategories: category.sub_category.map(
			(subCategory: SubCategory): SubCategory => ({
				id: subCategory.id,
				name: subCategory.name
			})
		)
	}));

	return { categories: categories };
};
