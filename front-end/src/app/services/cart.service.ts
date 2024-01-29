import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:8080/api/cart'; // Adjust the URL based on your actual API endpoint

  constructor(private http: HttpClient) {}

  addItemToCart(
    userId: number,
    productId: number,
    quantity: number
  ): Observable<Cart> {
    return this.http.post<Cart>(`${this.apiUrl}/${userId}/add/${productId}`, {
      quantity,
    });
  }

  getCart(userId: number): Observable<Cart> {
    return this.http.get<Cart>(`${this.apiUrl}/${userId}`);
  }

  updateCartItem(
    userId: number,
    itemId: number,
    quantity: number
  ): Observable<Cart> {
    return this.http.put<Cart>(`${this.apiUrl}/${userId}/update/${itemId}`, {
      quantity,
    });
  }

  removeCartItem(userId: number, itemId: number): Observable<Cart> {
    return this.http.delete<Cart>(`${this.apiUrl}/${userId}/remove/${itemId}`);
  }

  clearCart(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}/clear`);
  }
}
