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
	category_id: number;
	category_name: string;
	category_image_url: string;
	sub_service: Array<SubService>;
	category_service_junction: Array<{ service_description: string } | null>;
}

export interface SubService {
	sub_service_id: number;
	sub_service_name: string | null;
}
