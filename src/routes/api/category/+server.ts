import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type {
	DatabaseCategory,
	DatabaseCategoryWithSub,
	DatabaseSubCategory,
	ShopCategoryWithSub
} from '$lib/interfaces/category';

export const GET = (async ({ locals: { supabase } }) => {
	const { data, error: categoryError } = await supabase.rpc(
		'get_categories_with_subcategories',
		{}
	);

	if (categoryError) {
		console.log(categoryError);
	}

	const categoryResult = data as DatabaseCategoryWithSub[];

	const categories: ShopCategoryWithSub[] = categoryResult.map(
		(category: DatabaseCategoryWithSub) => ({
			id: category.category_id,
			name: category.category_name,
			image: category.category_image,
			subCategories: category.sub_categories.map((subCategory: DatabaseSubCategory) => ({
				id: subCategory.subcategory_id,
				name: subCategory.subcategory_name
			}))
		})
	);

	return new Response(JSON.stringify(categories));
}) satisfies RequestHandler;
