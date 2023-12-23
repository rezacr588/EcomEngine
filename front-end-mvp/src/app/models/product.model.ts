// product.model.ts
export class Product {
  id?: number;
  name: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  featured: boolean;

  constructor(
    name: string,
    price: number,
    description: string,
    category: string,
    imageUrl: string,
    featured: boolean
  ) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.category = category;
    this.imageUrl = imageUrl;
    this.featured = featured;
  }
}
