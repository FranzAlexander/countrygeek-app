import type {
	DatabaseProduct,
	DatabaseProductDisplay,
	Product,
	ProductDisplay,
	ProductSpec,
	ProductSupplier
} from '$lib/interfaces/product';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '../../supabase';
import { error } from '@sveltejs/kit';
import type { CategorySubcategory } from '$lib/interfaces/category';

export async function getProductById(
	productId: string,
	supabase: SupabaseClient<Database, 'public', any>
): Promise<Product> {
	const { data, error: getProductError } = await supabase
		.rpc('get_product_by_id', { p_sku: productId })
		.single();

	if (getProductError || !data) {
		throw error(400, 'Product not found!');
	}

	return transformDatabaseProduct(data as DatabaseProduct);
}

export async function getProductsByCategorySubcategory(
	categorySubcategory: CategorySubcategory,
	supabase: SupabaseClient<Database, 'public', any>
): Promise<ProductDisplay[]> {
	if (categorySubcategory.subCategoryId === null) {
		const { data, error: getProductByCateogryError } = await supabase.rpc(
			'get_products_by_category',
			{
				p_category_id: categorySubcategory.categoryId,
				p_offset: categorySubcategory.offset,
				p_limit: categorySubcategory.limit
			}
		);

		console.log(data);

		if (getProductByCateogryError || !data) {
			throw error(400, 'Could not get products');
		}

		return transformProductData(data);
	} else {
		const { data, error: getProductByCateogryError } = await supabase.rpc(
			'get_products_by_category_subcategory',
			{
				p_category_id: categorySubcategory.categoryId,
				p_subcategory_id: categorySubcategory.subCategoryId,
				p_offset: categorySubcategory.offset,
				p_limit: categorySubcategory.limit
			}
		);

		if (getProductByCateogryError || !data) {
			console.log(getProductByCateogryError);

			throw error(400, 'Could not get products');
		}

		return transformProductData(data);
	}
}

function transformDatabaseProduct(databaseProduct: DatabaseProduct): Product {
	return {
		sku: databaseProduct.sku,
		name: databaseProduct.name,
		description: databaseProduct.description,
		price: databaseProduct.price,
		stripeProductId: databaseProduct.stripe_product_id,
		brandName: databaseProduct.brand_name,
		model: databaseProduct.model,
		status: databaseProduct.status,
		images: databaseProduct.images,
		thumbnail: databaseProduct.thumbnail,
		warranty: databaseProduct.warranty,
		specs: databaseProduct.specs,
		suppliers: databaseProduct.suppliers
	};
}

function transformProductData(productData: DatabaseProductDisplay[]): ProductDisplay[] {
	return productData.map((product) => ({
		sku: product.sku,
		name: product.product_name,
		price: product.price,
		thumbnail: product.thumbnail,
		model: product.model,
		rating: product.rating
	}));
}
