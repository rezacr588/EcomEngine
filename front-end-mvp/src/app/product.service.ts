import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getFeaturedProducts() {
    return this.http.get<Product[]>(`[API_ENDPOINT]/products/featured`);
  }
}
