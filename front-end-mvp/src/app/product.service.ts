import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:8080/api/products';
  constructor(private http: HttpClient) {}

  getFeaturedProducts() {
    return this.http.get<Product[]>(`${this.apiUrl}/featured`);
  }

  addProduct(product: Product) {
    return this.http.post<Product>(`${this.apiUrl}`, product);
  }

  getLatestProducts() {
    return this.http.get<Product[]>(`${this.apiUrl}/latest`);
  }

  getAllProducts() {
    return this.http.get<Product[]>(`${this.apiUrl}`);
  }

  removeProduct(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
