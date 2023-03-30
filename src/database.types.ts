export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			category_service_junction: {
				Row: {
					category_id: number;
					service_description: string | null;
					service_id: number;
					service_image_url: string | null;
				};
				Insert: {
					category_id: number;
					service_description?: string | null;
					service_id: number;
					service_image_url?: string | null;
				};
				Update: {
					category_id?: number;
					service_description?: string | null;
					service_id?: number;
					service_image_url?: string | null;
				};
			};
			service_category: {
				Row: {
					category_id: number;
					category_image_url: string | null;
					category_name: string | null;
				};
				Insert: {
					category_id?: number;
					category_image_url?: string | null;
					category_name?: string | null;
				};
				Update: {
					category_id?: number;
					category_image_url?: string | null;
					category_name?: string | null;
				};
			};
			sub_service: {
				Row: {
					sub_service_id: number;
					sub_service_name: string | null;
				};
				Insert: {
					sub_service_id?: number;
					sub_service_name?: string | null;
				};
				Update: {
					sub_service_id?: number;
					sub_service_name?: string | null;
				};
			};
			user_profile: {
				Row: {
					created_at: string | null;
					fullname: string | null;
					id: string;
					number: string | null;
					updated_at: string | null;
				};
				Insert: {
					created_at?: string | null;
					fullname?: string | null;
					id: string;
					number?: string | null;
					updated_at?: string | null;
				};
				Update: {
					created_at?: string | null;
					fullname?: string | null;
					id?: string;
					number?: string | null;
					updated_at?: string | null;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
