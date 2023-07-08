// Returned from database.
export interface DatabaseCategory {
	category_id: number;
	category_name: string;
	category_image: string | null;
}

// Returned from database.
export interface DatabaseSubCategory {
	subcategory_id: number;
	subcategory_name: string;
}

// Returned from database.
export interface DatabaseCategoryWithSub extends DatabaseCategory {
	sub_categories: DatabaseSubCategory[];
}

// Apps.
export interface ShopCategory {
	id: number;
	name: string;
	image: string | null;
}
// Apps.
export interface SubCategory {
	id: number;
	name: string;
}

// Apps.
export interface ShopCategoryWithSub extends ShopCategory {
	subCategories: SubCategory[];
}

export interface CategorySubcategory {
	categoryId: number;
	subCategoryId: number | null;
	offset: number;
	limit: number;
}
