export interface Product {
	sku: string;
	name: string;
	description: string;
	price: string | number;
	stripeProductId: string;
	brandName: string;
	model: string;
	status: string;
	images: string[];
	thumbnail: string;
	warranty: string;
	specs: ProductSpec[];
	suppliers: ProductSupplier[];
}

export interface DatabaseProduct {
	sku: string;
	name: string;
	description: string;
	price: number;
	stripe_product_id: string;
	brand_name: string;
	model: string;
	status: string;
	images: string[];
	thumbnail: string;
	warranty: string;
	specs: {
		spec_icon: string | null;
		spec_name: string;
		spec_value: string;
	}[];
	suppliers: {
		amount: number;
		supplier_id: number;
	}[];
}

export interface DatabaseProductDisplay {
	sku: string;
	product_name: string;
	price: number;
	thumbnail: string;
	model: string;
	rating: number;
}

export interface ProductDisplay {
	sku: string;
	name: string;
	price: number;
	thumbnail: string;
	model: string;
	rating: number;
}

export interface ProductSupplier {
	supplier_id: number;
	amount: number;
}

export interface ProductSpec {
	spec_name: string;
	spec_value: string;
	spec_icon: string | null;
}

export interface ProductPayload {
	productSku: string;
}
