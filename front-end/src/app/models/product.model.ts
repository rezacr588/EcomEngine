// product.model.ts
export class Product {
  id: number;
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
    featured: boolean,
    id: number
  ) {
    this.name = name;
    this.id = id;
    this.price = price;
    this.description = description;
    this.category = category;
    this.imageUrl = imageUrl;
    this.featured = featured;
  }
}
