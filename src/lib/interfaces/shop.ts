export interface ShopCategory {
	id: number;
	name: string;
}

export interface SubCategory {
	id: number;
	name: string;
}

export interface ShopCategoryWithSub extends ShopCategory {
	subCategories: SubCategory[];
}

export interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	categoryId: number;
	subCategoryId: number;
	stripeProductId: string;
	brand: string;
	model: string;
	status: string;
	images: string[];
	thumbnail: string;
	sku: string;
}
