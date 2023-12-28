import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getFeaturedProducts() {
    return this.http.get<Product[]>(
      `http://localhost:8080/api/products/featured`
    );
  }

  addProduct(product: Product) {
    return this.http.post(`http://localhost:8080/api/products`, product);
  }
}
