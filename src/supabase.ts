export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			category: {
				Row: {
					id: number;
					name: string;
				};
				Insert: {
					id?: number;
					name: string;
				};
				Update: {
					id?: number;
					name?: string;
				};
			};
			category_sub_category: {
				Row: {
					category_id: number;
					sub_category_id: number;
				};
				Insert: {
					category_id?: number;
					sub_category_id: number;
				};
				Update: {
					category_id?: number;
					sub_category_id?: number;
				};
			};
			product: {
				Row: {
					amount: number | null;
					brand: string | null;
					category_id: number | null;
					description: string | null;
					id: number;
					images: string[] | null;
					inserted_at: string;
					model: string | null;
					name: string;
					price: number;
					sku: string;
					status: string | null;
					stripe_product_id: string | null;
					sub_category_id: number | null;
					updated_at: string;
				};
				Insert: {
					amount?: number | null;
					brand?: string | null;
					category_id?: number | null;
					description?: string | null;
					id?: number;
					images?: string[] | null;
					inserted_at?: string;
					model?: string | null;
					name: string;
					price: number;
					sku: string;
					status?: string | null;
					stripe_product_id?: string | null;
					sub_category_id?: number | null;
					updated_at?: string;
				};
				Update: {
					amount?: number | null;
					brand?: string | null;
					category_id?: number | null;
					description?: string | null;
					id?: number;
					images?: string[] | null;
					inserted_at?: string;
					model?: string | null;
					name?: string;
					price?: number;
					sku?: string;
					status?: string | null;
					stripe_product_id?: string | null;
					sub_category_id?: number | null;
					updated_at?: string;
				};
			};
			product_analytics: {
				Row: {
					analytics_date: string;
					id: number;
					product_id: number | null;
					purchases: number | null;
					rating: number | null;
					total_clicks: number | null;
					unique_clicks: number | null;
				};
				Insert: {
					analytics_date?: string;
					id?: number;
					product_id?: number | null;
					purchases?: number | null;
					rating?: number | null;
					total_clicks?: number | null;
					unique_clicks?: number | null;
				};
				Update: {
					analytics_date?: string;
					id?: number;
					product_id?: number | null;
					purchases?: number | null;
					rating?: number | null;
					total_clicks?: number | null;
					unique_clicks?: number | null;
				};
			};
			product_spec: {
				Row: {
					id: number;
					product_id: number | null;
					specs: Json | null;
				};
				Insert: {
					id?: number;
					product_id?: number | null;
					specs?: Json | null;
				};
				Update: {
					id?: number;
					product_id?: number | null;
					specs?: Json | null;
				};
			};
			product_supplier: {
				Row: {
					id: number;
					lead_time: number | null;
					product_code: string | null;
					product_id: number | null;
					purchase_price: number | null;
					supplier_id: number | null;
				};
				Insert: {
					id?: number;
					lead_time?: number | null;
					product_code?: string | null;
					product_id?: number | null;
					purchase_price?: number | null;
					supplier_id?: number | null;
				};
				Update: {
					id?: number;
					lead_time?: number | null;
					product_code?: string | null;
					product_id?: number | null;
					purchase_price?: number | null;
					supplier_id?: number | null;
				};
			};
			sub_category: {
				Row: {
					category_id: number | null;
					id: number;
					name: string;
				};
				Insert: {
					category_id?: number | null;
					id?: number;
					name: string;
				};
				Update: {
					category_id?: number | null;
					id?: number;
					name?: string;
				};
			};
			supplier: {
				Row: {
					address: string | null;
					contact_person: string | null;
					country: string | null;
					email: string;
					id: number;
					name: string;
					phone: string | null;
				};
				Insert: {
					address?: string | null;
					contact_person?: string | null;
					country?: string | null;
					email: string;
					id?: number;
					name: string;
					phone?: string | null;
				};
				Update: {
					address?: string | null;
					contact_person?: string | null;
					country?: string | null;
					email?: string;
					id?: number;
					name?: string;
					phone?: string | null;
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
			pricing_plan_interval: 'day' | 'week' | 'month' | 'year';
			pricing_type: 'one_time' | 'recurring';
			subscription_status:
				| 'trialing'
				| 'active'
				| 'canceled'
				| 'incomplete'
				| 'incomplete_expired'
				| 'past_due'
				| 'unpaid';
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
