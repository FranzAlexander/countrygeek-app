export interface ShopCategory {
	id: number;
	name: string;
	icon: string | null;
}

export interface SubCategory {
	id: number;
	name: string;
	icon: string | null;
}

export interface ShopCategoryWithSub extends ShopCategory {
	subCategories: SubCategory[];
}
