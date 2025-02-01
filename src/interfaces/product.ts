interface Media {
  url: string;
  formats: any[];
}

interface Image {
  altText: string;
  image: Media;
}

interface SimillarProduct {
  name: string;
  price: string;
  slug: string;
  isNew: string;
  isBestseller: string;
  images: Image[];
}

interface Discount {
  discountType: string;
  discountValue: number;
}

interface ProductCategory {
  label: string;
  slug: string;
  parent: ProductCategory;
  children: ProductCategory[];
  discount: Discount;
}

interface Option {
  price: number;
  stock: number;
  product_option_category: string;
  product_option_category_values: string[];
}

export interface Product {
  name: string;
  briefDescription: string;
  description: string;
  slug: string;
  isNew: boolean;
  isBestseller: boolean;
  price: number;
  stock: number;
  images: Image[];
  simillarProductsHas: SimillarProduct;
  simillarProductsBelongsTo: SimillarProduct;
  discount: Discount;
  product_category: ProductCategory;
  options: Option[];
}
