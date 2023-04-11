export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      booking: {
        Row: {
          category_name: string | null
          city: string | null
          created_at: string | null
          date: string | null
          description: string | null
          email: string | null
          full_name: string | null
          id: number
          phone: string | null
          postcode: string | null
          profile_id: string | null
          service_name: string | null
          street_address: string | null
        }
        Insert: {
          category_name?: string | null
          city?: string | null
          created_at?: string | null
          date?: string | null
          description?: string | null
          email?: string | null
          full_name?: string | null
          id?: number
          phone?: string | null
          postcode?: string | null
          profile_id?: string | null
          service_name?: string | null
          street_address?: string | null
        }
        Update: {
          category_name?: string | null
          city?: string | null
          created_at?: string | null
          date?: string | null
          description?: string | null
          email?: string | null
          full_name?: string | null
          id?: number
          phone?: string | null
          postcode?: string | null
          profile_id?: string | null
          service_name?: string | null
          street_address?: string | null
        }
      }
      payment_status: {
        Row: {
          id: number
          status: string | null
        }
        Insert: {
          id?: number
          status?: string | null
        }
        Update: {
          id?: number
          status?: string | null
        }
      }
      service_category: {
        Row: {
          category_image_url: string | null
          category_name: string | null
          id: number
          is_active: boolean
          list_order: number | null
        }
        Insert: {
          category_image_url?: string | null
          category_name?: string | null
          id?: number
          is_active?: boolean
          list_order?: number | null
        }
        Update: {
          category_image_url?: string | null
          category_name?: string | null
          id?: number
          is_active?: boolean
          list_order?: number | null
        }
      }
      sub_service: {
        Row: {
          category_id: number | null
          id: number
          image_url: string | null
          is_active: boolean | null
          list_order: number | null
          service_description: string | null
          sub_service_name: string | null
        }
        Insert: {
          category_id?: number | null
          id?: number
          image_url?: string | null
          is_active?: boolean | null
          list_order?: number | null
          service_description?: string | null
          sub_service_name?: string | null
        }
        Update: {
          category_id?: number | null
          id?: number
          image_url?: string | null
          is_active?: boolean | null
          list_order?: number | null
          service_description?: string | null
          sub_service_name?: string | null
        }
      }
      user_address: {
        Row: {
          city: string | null
          id: number
          postcode: string | null
          profile_id: string | null
          street_address: string | null
        }
        Insert: {
          city?: string | null
          id?: number
          postcode?: string | null
          profile_id?: string | null
          street_address?: string | null
        }
        Update: {
          city?: string | null
          id?: number
          postcode?: string | null
          profile_id?: string | null
          street_address?: string | null
        }
      }
      user_profile: {
        Row: {
          created_at: string | null
          email: string | null
          fullname: string | null
          id: string
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          fullname?: string | null
          id: string
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          fullname?: string | null
          id?: string
          phone?: string | null
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

