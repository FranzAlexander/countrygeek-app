import type { CategorySubcategory } from '$lib/interfaces/category';
import type { ProductPayload } from '$lib/interfaces/product';
import { getProductById, getProductsByCategorySubcategory } from '$lib/server/productHandler';
import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';

export const POST = (async ({ request, locals: { supabase } }) => {
	const requestData = await request.json();

	if (isProductPayload(requestData)) {
		try {
			const product = await getProductById(requestData.productSku, supabase);
			return new Response(JSON.stringify(product));
		} catch (catchError) {
			throw error(400, 'Wrong product type');
		}
	}

	if (isCategorySubcategoryPayload(requestData)) {
		try {
			const products = await getProductsByCategorySubcategory(requestData, supabase);
			return new Response(JSON.stringify(products));
		} catch (catchError) {
			throw error(400, 'Unable to get products');
		}
	}
	return new Response(JSON.stringify(''));
}) satisfies RequestHandler;

function isProductPayload(payload: any): payload is ProductPayload {
	if (typeof payload === 'object' && payload !== null) {
		const { productSku } = payload as ProductPayload;
		return typeof productSku === 'string';
	}
	return false;
}

function isCategorySubcategoryPayload(payload: any): payload is CategorySubcategory {
	if (typeof payload === 'object' && payload !== null) {
		const { categoryId, subCategoryId, offset, limit } = payload as CategorySubcategory;
		return (
			typeof categoryId === 'number' &&
			(typeof subCategoryId === 'number' || subCategoryId === null) &&
			typeof offset === 'number' &&
			typeof limit === 'number'
		);
	}
	return false;
}
