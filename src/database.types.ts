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
          service_name?: string | null
          street_address?: string | null
        }
      }
      category_service_junction: {
        Row: {
          category_id: number
          service_description: string | null
          service_id: number
          service_image_url: string | null
        }
        Insert: {
          category_id: number
          service_description?: string | null
          service_id: number
          service_image_url?: string | null
        }
        Update: {
          category_id?: number
          service_description?: string | null
          service_id?: number
          service_image_url?: string | null
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
          id: number
          sub_service_name: string | null
        }
        Insert: {
          id?: number
          sub_service_name?: string | null
        }
        Update: {
          id?: number
          sub_service_name?: string | null
        }
      }
      user_address: {
        Row: {
          city: string | null
          id: number
          postcode: string | null
          street_address: string | null
          suburb: string | null
        }
        Insert: {
          city?: string | null
          id?: number
          postcode?: string | null
          street_address?: string | null
          suburb?: string | null
        }
        Update: {
          city?: string | null
          id?: number
          postcode?: string | null
          street_address?: string | null
          suburb?: string | null
        }
      }
      user_profile: {
        Row: {
          address_id: number | null
          created_at: string | null
          email: string | null
          fullname: string | null
          id: string
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          address_id?: number | null
          created_at?: string | null
          email?: string | null
          fullname?: string | null
          id: string
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          address_id?: number | null
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

