import { error, json } from '@sveltejs/kit';
import { supabaseClient } from '../../../lib/server/db';
import type { RequestHandler } from './$types';
import type { ShopCategoryWithSub, SubCategory } from '../../../lib/interfaces/shop';

export const GET = (async () => {
	const { data: categoryRequest } = await supabaseClient
		.from('category')
		.select('*, sub_category(*)');

	if (!categoryRequest) {
		throw error(400, 'Error getting categories');
	}

	const categories: ShopCategoryWithSub[] = categoryRequest.map((category) => ({
		id: category.id,
		name: category.name,
		subCategories: category.sub_category.map(
			(subCategory: SubCategory): SubCategory => ({
				id: subCategory.id,
				name: subCategory.name
			})
		)
	}));
	return new Response(JSON.stringify(categories));
}) satisfies RequestHandler;
