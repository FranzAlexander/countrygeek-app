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
			'category_subcategory ': {
				Row: {
					category_id: number;
					product_id: number;
				};
				Insert: {
					category_id?: number;
					product_id: number;
				};
				Update: {
					category_id?: number;
					product_id?: number;
				};
			};
			product: {
				Row: {
					brand: string | null;
					category_id: number | null;
					description: string | null;
					id: number;
					images: string[] | null;
					inserted_at: string;
					model: string | null;
					name: string;
					price: number;
					sku: string | null;
					status: string | null;
					stripe_product_id: string | null;
					sub_category_id: number | null;
					thumbnail: string | null;
					updated_at: string;
				};
				Insert: {
					brand?: string | null;
					category_id?: number | null;
					description?: string | null;
					id?: number;
					images?: string[] | null;
					inserted_at?: string;
					model?: string | null;
					name: string;
					price: number;
					sku?: string | null;
					status?: string | null;
					stripe_product_id?: string | null;
					sub_category_id?: number | null;
					thumbnail?: string | null;
					updated_at?: string;
				};
				Update: {
					brand?: string | null;
					category_id?: number | null;
					description?: string | null;
					id?: number;
					images?: string[] | null;
					inserted_at?: string;
					model?: string | null;
					name?: string;
					price?: number;
					sku?: string | null;
					status?: string | null;
					stripe_product_id?: string | null;
					sub_category_id?: number | null;
					thumbnail?: string | null;
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
					amount: number | null;
					id: number;
					lead_time: number | null;
					product_code: string | null;
					product_id: number | null;
					purchase_price: number | null;
					supplier_id: number | null;
				};
				Insert: {
					amount?: number | null;
					id?: number;
					lead_time?: number | null;
					product_code?: string | null;
					product_id?: number | null;
					purchase_price?: number | null;
					supplier_id?: number | null;
				};
				Update: {
					amount?: number | null;
					id?: number;
					lead_time?: number | null;
					product_code?: string | null;
					product_id?: number | null;
					purchase_price?: number | null;
					supplier_id?: number | null;
				};
			};
			promotion: {
				Row: {
					discount: number | null;
					end_date: string | null;
					id: number;
					name: string | null;
					start_date: string | null;
				};
				Insert: {
					discount?: number | null;
					end_date?: string | null;
					id?: number;
					name?: string | null;
					start_date?: string | null;
				};
				Update: {
					discount?: number | null;
					end_date?: string | null;
					id?: number;
					name?: string | null;
					start_date?: string | null;
				};
			};
			sub_category: {
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