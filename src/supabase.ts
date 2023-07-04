export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
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
          created_at: string | null
          id: number
          product_sku: string | null
          quantity: number | null
          shopping_cart_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          product_sku?: string | null
          quantity?: number | null
          shopping_cart_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          product_sku?: string | null
          quantity?: number | null
          shopping_cart_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cart_item_product_sku_fkey"
            columns: ["product_sku"]
            referencedRelation: "product"
            referencedColumns: ["sku"]
          },
          {
            foreignKeyName: "cart_item_shopping_cart_id_fkey"
            columns: ["shopping_cart_id"]
            referencedRelation: "shopping_cart"
            referencedColumns: ["id"]
          }
        ]
      }
      category: {
        Row: {
          id: number
          image: string | null
          name: string
        }
        Insert: {
          id?: number
          image?: string | null
          name: string
        }
        Update: {
          id?: number
          image?: string | null
          name?: string
        }
        Relationships: []
      }
      category_subcategory: {
        Row: {
          category_id: number
          subcategory_id: number
        }
        Insert: {
          category_id?: number
          subcategory_id: number
        }
        Update: {
          category_id?: number
          subcategory_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "category_subcategory_category_id_fkey"
            columns: ["category_id"]
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "category_subcategory_subcategory_id_fkey"
            columns: ["subcategory_id"]
            referencedRelation: "subcategory"
            referencedColumns: ["id"]
          }
        ]
      }
      company_location: {
        Row: {
          address: string | null
          id: number
          postcode: string | null
          state: string | null
          suburb: string | null
        }
        Insert: {
          address?: string | null
          id?: number
          postcode?: string | null
          state?: string | null
          suburb?: string | null
        }
        Update: {
          address?: string | null
          id?: number
          postcode?: string | null
          state?: string | null
          suburb?: string | null
        }
        Relationships: []
      }
      inventory: {
        Row: {
          id: number
          product_sku: string | null
          quantity: number | null
          supplier_location_id: number | null
        }
        Insert: {
          id?: number
          product_sku?: string | null
          quantity?: number | null
          supplier_location_id?: number | null
        }
        Update: {
          id?: number
          product_sku?: string | null
          quantity?: number | null
          supplier_location_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_product_sku_fkey"
            columns: ["product_sku"]
            referencedRelation: "product"
            referencedColumns: ["sku"]
          },
          {
            foreignKeyName: "inventory_supplier_location_id_fkey"
            columns: ["supplier_location_id"]
            referencedRelation: "supplier_location"
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
          featured: boolean | null
          images: string[] | null
          model: string | null
          name: string
          price: number | null
          release_date: string | null
          sku: string
          status: Database["public"]["Enums"]["product_status"] | null
          stripe_product_id: string
          subcategory_id: number | null
          thumbnail: string | null
          updated_at: string | null
          warranty: string | null
        }
        Insert: {
          brand_id?: number | null
          category_id?: number | null
          created_at?: string | null
          description?: string | null
          featured?: boolean | null
          images?: string[] | null
          model?: string | null
          name: string
          price?: number | null
          release_date?: string | null
          sku: string
          status?: Database["public"]["Enums"]["product_status"] | null
          stripe_product_id: string
          subcategory_id?: number | null
          thumbnail?: string | null
          updated_at?: string | null
          warranty?: string | null
        }
        Update: {
          brand_id?: number | null
          category_id?: number | null
          created_at?: string | null
          description?: string | null
          featured?: boolean | null
          images?: string[] | null
          model?: string | null
          name?: string
          price?: number | null
          release_date?: string | null
          sku?: string
          status?: Database["public"]["Enums"]["product_status"] | null
          stripe_product_id?: string
          subcategory_id?: number | null
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
            foreignKeyName: "product_subcategory_id_fkey"
            columns: ["subcategory_id"]
            referencedRelation: "subcategory"
            referencedColumns: ["id"]
          }
        ]
      }
      product_filter: {
        Row: {
          id: number
          product_sku: string | null
          spec_filter_id: number | null
          spec_id: number | null
        }
        Insert: {
          id?: number
          product_sku?: string | null
          spec_filter_id?: number | null
          spec_id?: number | null
        }
        Update: {
          id?: number
          product_sku?: string | null
          spec_filter_id?: number | null
          spec_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_filter_product_sku_fkey"
            columns: ["product_sku"]
            referencedRelation: "product"
            referencedColumns: ["sku"]
          },
          {
            foreignKeyName: "product_filter_spec_filter_id_fkey"
            columns: ["spec_filter_id"]
            referencedRelation: "spec_filter"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_filter_spec_id_fkey"
            columns: ["spec_id"]
            referencedRelation: "spec"
            referencedColumns: ["id"]
          }
        ]
      }
      product_rating: {
        Row: {
          created_at: string | null
          id: number
          product_sku: string
          profile_id: string | null
          rating: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          product_sku: string
          profile_id?: string | null
          rating: number
        }
        Update: {
          created_at?: string | null
          id?: number
          product_sku?: string
          profile_id?: string | null
          rating?: number
        }
        Relationships: [
          {
            foreignKeyName: "product_rating_product_sku_fkey"
            columns: ["product_sku"]
            referencedRelation: "product"
            referencedColumns: ["sku"]
          },
          {
            foreignKeyName: "product_rating_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profile"
            referencedColumns: ["id"]
          }
        ]
      }
      product_review: {
        Row: {
          created_at: string | null
          id: number
          product_sku: string
          profile_id: string | null
          review: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          product_sku: string
          profile_id?: string | null
          review: string
        }
        Update: {
          created_at?: string | null
          id?: number
          product_sku?: string
          profile_id?: string | null
          review?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_review_product_sku_fkey"
            columns: ["product_sku"]
            referencedRelation: "product"
            referencedColumns: ["sku"]
          },
          {
            foreignKeyName: "product_review_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profile"
            referencedColumns: ["id"]
          }
        ]
      }
      product_shipping: {
        Row: {
          height: number | null
          id: number
          length: number | null
          product_sku: string | null
          weight: number | null
          width: number | null
        }
        Insert: {
          height?: number | null
          id?: number
          length?: number | null
          product_sku?: string | null
          weight?: number | null
          width?: number | null
        }
        Update: {
          height?: number | null
          id?: number
          length?: number | null
          product_sku?: string | null
          weight?: number | null
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_shipping_product_sku_fkey"
            columns: ["product_sku"]
            referencedRelation: "product"
            referencedColumns: ["sku"]
          }
        ]
      }
      product_spec: {
        Row: {
          id: number
          product_sku: string | null
          spec_id: number | null
          value: string | null
        }
        Insert: {
          id?: number
          product_sku?: string | null
          spec_id?: number | null
          value?: string | null
        }
        Update: {
          id?: number
          product_sku?: string | null
          spec_id?: number | null
          value?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "product_spec_product_sku_fkey"
            columns: ["product_sku"]
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
          id: number
          product_sku: string
          purchase_price: number
          supplier_id: number
          supplier_product_code: string
        }
        Insert: {
          id?: number
          product_sku: string
          purchase_price: number
          supplier_id: number
          supplier_product_code: string
        }
        Update: {
          id?: number
          product_sku?: string
          purchase_price?: number
          supplier_id?: number
          supplier_product_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_supplier_product_sku_fkey"
            columns: ["product_sku"]
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
          created_at: string | null
          email: string | null
          id: string
          is_admin: boolean | null
          is_guest: boolean
          name: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id: string
          is_admin?: boolean | null
          is_guest?: boolean
          name?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          is_admin?: boolean | null
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
      spec_filter: {
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
      subcategory: {
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
      supplier: {
        Row: {
          contact_person: string | null
          email: string
          id: number
          name: string
          phone: string | null
        }
        Insert: {
          contact_person?: string | null
          email: string
          id?: number
          name: string
          phone?: string | null
        }
        Update: {
          contact_person?: string | null
          email?: string
          id?: number
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      supplier_location: {
        Row: {
          address: string | null
          id: number
          postcode: string | null
          state: string | null
          suburb: string | null
          supplier_id: number | null
        }
        Insert: {
          address?: string | null
          id?: number
          postcode?: string | null
          state?: string | null
          suburb?: string | null
          supplier_id?: number | null
        }
        Update: {
          address?: string | null
          id?: number
          postcode?: string | null
          state?: string | null
          suburb?: string | null
          supplier_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "supplier_location_supplier_id_fkey"
            columns: ["supplier_id"]
            referencedRelation: "supplier"
            referencedColumns: ["id"]
          }
        ]
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
          item_id: number
          thumbnail: string
          name: string
          price: number
          quantity: number
        }[]
      }
      create_product: {
        Args: {
          _sku: string
          _name: string
          _description: string
          _price: number
          _model: string
          _status: Database["public"]["Enums"]["product_status"]
          _thumbnail: string
          _images: Json
          _warranty: string
          _release_date: string
          _featured: boolean
          _stripe_product_id: string
          _category_id: number
          _subcategory_id: number
          _brand_id: number
          _length: number
          _width: number
          _height: number
          _weight: number
          _product_specs: Json
          _product_filters: Json
          _supplier_locations: Json
        }
        Returns: undefined
      }
      get_cart_items: {
        Args: {
          _cart_id: string
        }
        Returns: {
          item_id: number
          product_name: string
          thumbnail: string
          quantity: number
          price: number
        }[]
      }
      get_categories_with_subcategories: {
        Args: Record<PropertyKey, never>
        Returns: {
          category_id: number
          category_name: string
          category_image: string
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
      get_products_by_category: {
        Args: {
          p_category_id: number
          p_offset: number
          p_limit: number
        }
        Returns: {
          sku: string
          product_name: string
          price: number
          thumbnail: string
          model: string
          rating: number
        }[]
      }
      get_products_by_category_sub_category: {
        Args: {
          p_category_id: number
          p_sub_category_id: number
          p_offset: number
          p_limit: number
        }
        Returns: {
          sku: string
          product_name: string
          price: number
          thumbnail: string
          model: string
          rating: number
        }[]
      }
      remove_cart_item: {
        Args: {
          _cart_id: string
          _item_id: number
        }
        Returns: undefined
      }
      update_cart_item_quantity: {
        Args: {
          _cart_id: string
          _item_id: number
          _quantity: number
        }
        Returns: undefined
      }
    }
    Enums: {
      pricing_plan_interval: "day" | "week" | "month" | "year"
      pricing_type: "one_time" | "recurring"
      product_status: "In Stock" | "Sold out"
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
