export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			booking: {
				Row: {
					booking_status: number;
					category_name: string;
					city: string;
					country: string;
					created_at: string | null;
					date: string | null;
					description: string;
					email: string;
					full_name: string;
					id: number;
					phone: string;
					postcode: string;
					profile_id: string | null;
					service_name: string;
					state: string;
					street_address: string;
				};
				Insert: {
					booking_status: number;
					category_name: string;
					city: string;
					country: string;
					created_at?: string | null;
					date?: string | null;
					description: string;
					email: string;
					full_name: string;
					id?: number;
					phone: string;
					postcode: string;
					profile_id?: string | null;
					service_name: string;
					state: string;
					street_address: string;
				};
				Update: {
					booking_status?: number;
					category_name?: string;
					city?: string;
					country?: string;
					created_at?: string | null;
					date?: string | null;
					description?: string;
					email?: string;
					full_name?: string;
					id?: number;
					phone?: string;
					postcode?: string;
					profile_id?: string | null;
					service_name?: string;
					state?: string;
					street_address?: string;
				};
			};
			booking_status: {
				Row: {
					id: number;
					status: string | null;
				};
				Insert: {
					id?: number;
					status?: string | null;
				};
				Update: {
					id?: number;
					status?: string | null;
				};
			};
			country: {
				Row: {
					code: string | null;
					id: number;
					name: string | null;
				};
				Insert: {
					code?: string | null;
					id?: number;
					name?: string | null;
				};
				Update: {
					code?: string | null;
					id?: number;
					name?: string | null;
				};
			};
			customers: {
				Row: {
					id: string;
					stripe_customer_id: string | null;
				};
				Insert: {
					id: string;
					stripe_customer_id?: string | null;
				};
				Update: {
					id?: string;
					stripe_customer_id?: string | null;
				};
			};
			payment_status: {
				Row: {
					id: number;
					status: string | null;
				};
				Insert: {
					id?: number;
					status?: string | null;
				};
				Update: {
					id?: number;
					status?: string | null;
				};
			};
			prices: {
				Row: {
					active: boolean | null;
					currency: string | null;
					description: string | null;
					id: string;
					interval: Database['public']['Enums']['pricing_plan_interval'] | null;
					interval_count: number | null;
					metadata: Json | null;
					product_id: string | null;
					trial_period_days: number | null;
					type: Database['public']['Enums']['pricing_type'] | null;
					unit_amount: number | null;
				};
				Insert: {
					active?: boolean | null;
					currency?: string | null;
					description?: string | null;
					id: string;
					interval?: Database['public']['Enums']['pricing_plan_interval'] | null;
					interval_count?: number | null;
					metadata?: Json | null;
					product_id?: string | null;
					trial_period_days?: number | null;
					type?: Database['public']['Enums']['pricing_type'] | null;
					unit_amount?: number | null;
				};
				Update: {
					active?: boolean | null;
					currency?: string | null;
					description?: string | null;
					id?: string;
					interval?: Database['public']['Enums']['pricing_plan_interval'] | null;
					interval_count?: number | null;
					metadata?: Json | null;
					product_id?: string | null;
					trial_period_days?: number | null;
					type?: Database['public']['Enums']['pricing_type'] | null;
					unit_amount?: number | null;
				};
			};
			products: {
				Row: {
					active: boolean | null;
					description: string | null;
					id: string;
					images: string[] | null;
					metadata: Json | null;
					name: string | null;
				};
				Insert: {
					active?: boolean | null;
					description?: string | null;
					id: string;
					images?: string[] | null;
					metadata?: Json | null;
					name?: string | null;
				};
				Update: {
					active?: boolean | null;
					description?: string | null;
					id?: string;
					images?: string[] | null;
					metadata?: Json | null;
					name?: string | null;
				};
			};
			service_category: {
				Row: {
					category_image_url: string | null;
					category_name: string | null;
					id: number;
					is_active: boolean;
					list_order: number | null;
				};
				Insert: {
					category_image_url?: string | null;
					category_name?: string | null;
					id?: number;
					is_active?: boolean;
					list_order?: number | null;
				};
				Update: {
					category_image_url?: string | null;
					category_name?: string | null;
					id?: number;
					is_active?: boolean;
					list_order?: number | null;
				};
			};
			shop_categories: {
				Row: {
					id: number;
					list_order: number | null;
					name: string | null;
				};
				Insert: {
					id?: number;
					list_order?: number | null;
					name?: string | null;
				};
				Update: {
					id?: number;
					list_order?: number | null;
					name?: string | null;
				};
			};
			shop_sub_categories: {
				Row: {
					id: number;
					name: string | null;
					shop_categories_id: number | null;
				};
				Insert: {
					id?: number;
					name?: string | null;
					shop_categories_id?: number | null;
				};
				Update: {
					id?: number;
					name?: string | null;
					shop_categories_id?: number | null;
				};
			};
			state: {
				Row: {
					code: string | null;
					id: number;
					name: string | null;
				};
				Insert: {
					code?: string | null;
					id?: number;
					name?: string | null;
				};
				Update: {
					code?: string | null;
					id?: number;
					name?: string | null;
				};
			};
			sub_service: {
				Row: {
					category_id: number | null;
					id: number;
					image_url: string | null;
					is_active: boolean | null;
					list_order: number | null;
					service_description: string | null;
					sub_service_name: string | null;
				};
				Insert: {
					category_id?: number | null;
					id?: number;
					image_url?: string | null;
					is_active?: boolean | null;
					list_order?: number | null;
					service_description?: string | null;
					sub_service_name?: string | null;
				};
				Update: {
					category_id?: number | null;
					id?: number;
					image_url?: string | null;
					is_active?: boolean | null;
					list_order?: number | null;
					service_description?: string | null;
					sub_service_name?: string | null;
				};
			};
			subscriptions: {
				Row: {
					cancel_at: string | null;
					cancel_at_period_end: boolean | null;
					canceled_at: string | null;
					created: string;
					current_period_end: string;
					current_period_start: string;
					ended_at: string | null;
					id: string;
					metadata: Json | null;
					price_id: string | null;
					quantity: number | null;
					status: Database['public']['Enums']['subscription_status'] | null;
					trial_end: string | null;
					trial_start: string | null;
					user_id: string;
				};
				Insert: {
					cancel_at?: string | null;
					cancel_at_period_end?: boolean | null;
					canceled_at?: string | null;
					created?: string;
					current_period_end?: string;
					current_period_start?: string;
					ended_at?: string | null;
					id: string;
					metadata?: Json | null;
					price_id?: string | null;
					quantity?: number | null;
					status?: Database['public']['Enums']['subscription_status'] | null;
					trial_end?: string | null;
					trial_start?: string | null;
					user_id: string;
				};
				Update: {
					cancel_at?: string | null;
					cancel_at_period_end?: boolean | null;
					canceled_at?: string | null;
					created?: string;
					current_period_end?: string;
					current_period_start?: string;
					ended_at?: string | null;
					id?: string;
					metadata?: Json | null;
					price_id?: string | null;
					quantity?: number | null;
					status?: Database['public']['Enums']['subscription_status'] | null;
					trial_end?: string | null;
					trial_start?: string | null;
					user_id?: string;
				};
			};
			user_address: {
				Row: {
					city: string | null;
					country_id: number | null;
					id: number;
					postcode: string | null;
					profile_id: string | null;
					state_id: number | null;
					street_address: string | null;
				};
				Insert: {
					city?: string | null;
					country_id?: number | null;
					id?: number;
					postcode?: string | null;
					profile_id?: string | null;
					state_id?: number | null;
					street_address?: string | null;
				};
				Update: {
					city?: string | null;
					country_id?: number | null;
					id?: number;
					postcode?: string | null;
					profile_id?: string | null;
					state_id?: number | null;
					street_address?: string | null;
				};
			};
			user_profile: {
				Row: {
					created_at: string | null;
					fullname: string | null;
					id: string;
					phone: string | null;
					role_id: number;
					updated_at: string | null;
				};
				Insert: {
					created_at?: string | null;
					fullname?: string | null;
					id: string;
					phone?: string | null;
					role_id?: number;
					updated_at?: string | null;
				};
				Update: {
					created_at?: string | null;
					fullname?: string | null;
					id?: string;
					phone?: string | null;
					role_id?: number;
					updated_at?: string | null;
				};
			};
			user_role: {
				Row: {
					id: number;
					is_admin: boolean | null;
					role: string | null;
				};
				Insert: {
					id?: number;
					is_admin?: boolean | null;
					role?: string | null;
				};
				Update: {
					id?: number;
					is_admin?: boolean | null;
					role?: string | null;
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
