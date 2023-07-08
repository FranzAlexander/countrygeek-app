export interface Supplier {
	id: number;
	name: string;
	locations: SupplierLocation[];
}

export interface SupplierLocation {
	id: number;
	state: string;
}

export interface AddSupplierInfo {
	supplierId: number;
	supplierLocations: AddSupplierInfoLoc[];
}

export interface AddSupplierInfoLoc {
	locationId: number;
	state: string;
	amount: number;
}

export interface Spec {
	id: number;
	name: string;
}

export interface SpecValue {
	id: number;
	name: string;
}

export interface AddSpec {
	specId: number;
	name: string;
	value: string;
}

export interface ImageResponse {
	result: {
		id: string;
		filename: string;
		uploaded: string;
		requireSignedURLs: boolean;
		variants: string[];
	};
	success: boolean;
	errors: Array<any>;
	messages: Array<any>;
}

export interface ProductAdd {
	CategoryCode: string;
	CategoryName: string;
	SubcategoryName: string;
	ImageUrl: string;
	StockCode: string;
	BarCode: string;
	Weight: string;
	ManufacturerSKU: string;
	ProductName: string;
	ProductName2: {
		Product: string;
		specs: {
			[key: string]: string;
		};
	};
	WarrantyLength: string;
	Manufacturer: string;
	DBP: string;
	DBP5: string;
	RRP: string;
	StandardRRP: string;
	AvailabilityTotal: string;
	AvailabilityAdelaide: string;
	AvailabilityBrisbane: string;
	AvailabilitySydney: string;
	AvailabilityMelbourne: string;
	AvailabilityPerth: string;
	pubDate: string;
	Length: string;
	Width: string;
	Height: string;
}
