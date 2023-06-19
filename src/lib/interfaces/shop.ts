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
	sku: string;
	name: string;
	description: string;
	price: string | number;
	stripe_product_id: string;
	brand_name: string;
	model: string;
	status: string;
	images: string[];
	thumbnail: string;
	warranty: string;
	specs: ProductSpec[];
	suppliers: ProductSupplier[];
}

export interface ProductDisplay {
	sku: string;
	name: string;
	price: string;
	thumbnail: string;
	rating: string;
	model: string;
}

export interface SpecFilter {
	specName: string;
	specOption: SpecFilterOption[];
}

export interface SpecFilterOption {
	specValue: string;
	specCount: number;
}

export interface CartItem {
	productName: string;
	productImage: string;
	productPrice: number;
	productQuantity: number;
}

export interface ProductSupplier {
	supplier_id: number;
	amount: number;
}

export interface ProductSpec {
	spec_name: string;
	spec_value: string;
	spec_icon: string;
}
