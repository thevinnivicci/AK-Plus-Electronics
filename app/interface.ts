export interface simplifiedProduct {
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  categorySlug: string;
  name: string;
}
export interface fullProduct {
  _id: string;
  images: any;
  price: number;
  slug: string;
  categoryName: string;
  categorySlug: string;
  name: string;
  description: string;
  price_id: string;
}
export interface product {
  _id: string;
  imageUrl: string;
  price: number;
  slug: string;
  categoryName: string;
  categorySlug: string;
  name: string;
}
