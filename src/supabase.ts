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
      brand: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      cart_item: {
        Row: {
          cart_id: string | null
          created_at: string | null
          id: number
          product_id: string | null
          quantity: number | null
        }
        Insert: {
          cart_id?: string | null
          created_at?: string | null
          id?: number
          product_id?: string | null
          quantity?: number | null
        }
        Update: {
          cart_id?: string | null
          created_at?: string | null
          id?: number
          product_id?: string | null
          quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cart_item_cart_id_fkey"
            columns: ["cart_id"]
            referencedRelation: "shopping_cart"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cart_item_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "product"
            referencedColumns: ["sku"]
          }
        ]
      }
      category: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      category_subcategory: {
        Row: {
          category_id: number
          sub_category_id: number
        }
        Insert: {
          category_id?: number
          sub_category_id: number
        }
        Update: {
          category_id?: number
          sub_category_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "category_subcategory_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "category_subcategory_sub_category_id_fkey"
            columns: ["sub_category_id"]
            referencedRelation: "sub_category"
            referencedColumns: ["id"]
          }
        ]
      }
      order: {
        Row: {
          customer_address: string
          customer_name: string
          date: string
          id: number
        }
        Insert: {
          customer_address: string
          customer_name: string
          date?: string
          id?: number
        }
        Update: {
          customer_address?: string
          customer_name?: string
          date?: string
          id?: number
        }
        Relationships: []
      }
      order_item: {
        Row: {
          id: number
          order_id: number | null
          product_id: string | null
          quantity: number | null
          supplier_id: number | null
        }
        Insert: {
          id?: number
          order_id?: number | null
          product_id?: string | null
          quantity?: number | null
          supplier_id?: number | null
        }
        Update: {
          id?: number
          order_id?: number | null
          product_id?: string | null
          quantity?: number | null
          supplier_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "order_item_order_id_fkey"
            columns: ["order_id"]
            referencedRelation: "order"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_item_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "product"
            referencedColumns: ["sku"]
          },
          {
            foreignKeyName: "order_item_supplier_id_fkey"
            columns: ["supplier_id"]
            referencedRelation: "supplier"
            referencedColumns: ["id"]
          }
        ]
      }
      product: {
        Row: {
          brand_id: number | null
          category_id: number | null
          created_at: string | null
          description: string | null
          images: string[] | null
          model: string | null
          name: string | null
          price: number | null
          sku: string
          status: string | null
          stripe_product_id: string | null
          sub_category_id: number | null
          thumbnail: string | null
          updated_at: string | null
          warranty: string | null
        }
        Insert: {
          brand_id?: number | null
          category_id?: number | null
          created_at?: string | null
          description?: string | null
          images?: string[] | null
          model?: string | null
          name?: string | null
          price?: number | null
          sku: string
          status?: string | null
          stripe_product_id?: string | null
          sub_category_id?: number | null
          thumbnail?: string | null
          updated_at?: string | null
          warranty?: string | null
        }
        Update: {
          brand_id?: number | null
          category_id?: number | null
          created_at?: string | null
          description?: string | null
          images?: string[] | null
          model?: string | null
          name?: string | null
          price?: number | null
          sku?: string
          status?: string | null
          stripe_product_id?: string | null
          sub_category_id?: number | null
          thumbnail?: string | null
          updated_at?: string | null
          warranty?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_brand_id_fkey"
            columns: ["brand_id"]
            referencedRelation: "brand"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_sub_category_id_fkey"
            columns: ["sub_category_id"]
            referencedRelation: "sub_category"
            referencedColumns: ["id"]
          }
        ]
      }
      product_analytics: {
        Row: {
          analytics_date: string
          id: number
          product_id: string
          purchases: number | null
          rating: number | null
          total_clicks: number | null
          unique_clicks: number | null
        }
        Insert: {
          analytics_date?: string
          id?: number
          product_id: string
          purchases?: number | null
          rating?: number | null
          total_clicks?: number | null
          unique_clicks?: number | null
        }
        Update: {
          analytics_date?: string
          id?: number
          product_id?: string
          purchases?: number | null
          rating?: number | null
          total_clicks?: number | null
          unique_clicks?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_analytics_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "product"
            referencedColumns: ["sku"]
          }
        ]
      }
      product_spec: {
        Row: {
          id: number
          product_id: string
          spec_id: number
          spec_value: string | null
          value: string
        }
        Insert: {
          id?: number
          product_id: string
          spec_id: number
          spec_value?: string | null
          value: string
        }
        Update: {
          id?: number
          product_id?: string
          spec_id?: number
          spec_value?: string | null
          value?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_spec_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "product"
            referencedColumns: ["sku"]
          },
          {
            foreignKeyName: "product_spec_spec_id_fkey"
            columns: ["spec_id"]
            referencedRelation: "spec"
            referencedColumns: ["id"]
          }
        ]
      }
      product_supplier: {
        Row: {
          amount: number | null
          id: number
          lead_time: number | null
          product_code: string
          product_id: string | null
          purchase_price: number | null
          supplier_id: number
        }
        Insert: {
          amount?: number | null
          id?: number
          lead_time?: number | null
          product_code: string
          product_id?: string | null
          purchase_price?: number | null
          supplier_id: number
        }
        Update: {
          amount?: number | null
          id?: number
          lead_time?: number | null
          product_code?: string
          product_id?: string | null
          purchase_price?: number | null
          supplier_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "product_supplier_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "product"
            referencedColumns: ["sku"]
          },
          {
            foreignKeyName: "product_supplier_supplier_id_fkey"
            columns: ["supplier_id"]
            referencedRelation: "supplier"
            referencedColumns: ["id"]
          }
        ]
      }
      profile: {
        Row: {
          address: string | null
          created_at: string | null
          email: string | null
          id: string
          is_guest: boolean
          name: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          email?: string | null
          id: string
          is_guest?: boolean
          name?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          is_guest?: boolean
          name?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profile_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      promotion: {
        Row: {
          discount: number | null
          end_date: string | null
          id: number
          name: string | null
          product_id: string
          start_date: string | null
        }
        Insert: {
          discount?: number | null
          end_date?: string | null
          id?: number
          name?: string | null
          product_id: string
          start_date?: string | null
        }
        Update: {
          discount?: number | null
          end_date?: string | null
          id?: number
          name?: string | null
          product_id?: string
          start_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "promotion_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "product"
            referencedColumns: ["sku"]
          }
        ]
      }
      shopping_cart: {
        Row: {
          created_at: string | null
          id: string
        }
        Insert: {
          created_at?: string | null
          id: string
        }
        Update: {
          created_at?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "shopping_cart_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      spec: {
        Row: {
          icon: string | null
          id: number
          name: string | null
        }
        Insert: {
          icon?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          icon?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      sub_category: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      supplier: {
        Row: {
          address: string | null
          contact_person: string | null
          country: string | null
          email: string
          id: number
          name: string
          phone: string | null
        }
        Insert: {
          address?: string | null
          contact_person?: string | null
          country?: string | null
          email: string
          id?: number
          name: string
          phone?: string | null
        }
        Update: {
          address?: string | null
          contact_person?: string | null
          country?: string | null
          email?: string
          id?: number
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      add_to_cart: {
        Args: {
          _profile_id: string
          _product_id: string
          _quantity: number
        }
        Returns: {
          thumbnail: string
          name: string
          price: number
          quantity: number
        }[]
      }
      get_categories_with_subcategories: {
        Args: Record<PropertyKey, never>
        Returns: {
          category_id: number
          category_name: string
          sub_categories: Json
        }[]
      }
      get_product_by_id: {
        Args: {
          p_sku: string
        }
        Returns: {
          sku: string
          name: string
          description: string
          price: number
          stripe_product_id: string
          brand_name: string
          model: string
          status: string
          images: string[]
          thumbnail: string
          warranty: string
          specs: Json
          suppliers: Json
        }[]
      }
      get_product_filters_by_subcategory: {
        Args: {
          sub_category_id_in: number
        }
        Returns: {
          spec_name: string
          spec_value: string
          count: number
        }[]
      }
    }
    Enums: {
      pricing_plan_interval: "day" | "week" | "month" | "year"
      pricing_type: "one_time" | "recurring"
      subscription_status:
        | "trialing"
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "unpaid"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
