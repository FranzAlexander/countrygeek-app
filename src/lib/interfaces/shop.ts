export interface ShopCategory {
	id: number;
	name: string;
}

<<<<<<< HEAD
export interface shopCategories {
	id: number;
	name: string | null;
	list_order: number | null;
}

export interface DisplayItem {
	name: string | null;
	description: string | null;
	unit_amount: number | null;
	image: string | null;
=======
export interface SubCategory {
	id: number;
	name: string;
}

export interface ShopCategoryWithSub extends ShopCategory {
	subCategories: SubCategory[];
>>>>>>> 69b7bddb43910ef7557313261eb37008a694ce8d
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

export interface ProductDisplay {
	sku: string;
	name: string;
	price: string;
	thumbnail: string;
	rating: string;
	model: string;
}
