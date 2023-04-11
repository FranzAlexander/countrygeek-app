export interface ServiceInfo {
	category_id: number;
	category: string;
	s_type: string;
	description: string;
}
// export interface Services {
// 	services: ServiceInfo[];
// }

// export interface AllServices {
// 	all_services: Services[];
// }

// export interface CategoryId {
// 	category_id: number;
// }

// export interface Services {
// 	service_category: Category;
// 	service_types: ServiceTypes[];
// }

// export interface Category {
// 	category_id: number;
// 	category: string;
// }

// export interface ServiceTypes {
// 	type_id: number;
// 	type_name: string;
// 	type_description: string;
// }

export interface Services {
	category_id: number | null;
	category_name: string | null;
	category_image_url: string | null;
	sub_service: SubService[];
}

export interface SubService {
	sub_service_id: number | null;
	sub_service_name: string | null;
	service_description: string | null;
}
