import type { ShopCategory } from '$lib/interfaces/shop';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { supabase }, params }) => {
	const categoryName = decodeURIComponent(params.slug.replaceAll(/-/g, ' '));

	const { data: products } = await supabase
		.from('products')
		.select('*')
		.eq('Category', { category: categoryName });

	console.log(products);

	return { categoryName, products };
};
