export interface ServiceInfo {
	category_id: number;
	category: string;
	s_type: string;
	description: string;
}
export interface Services {
	services: ServiceInfo[];
}

export interface AllServices {
	all_services: Services[];
}

export interface Category {
	category_id: number;
	category: string;
}
