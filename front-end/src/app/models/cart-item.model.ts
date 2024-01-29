// src/app/models/cart-item.model.ts
export interface CartItem {
  id: number;
  cartId: number; // Reference to the Cart ID, assuming it's necessary in the front-end context
  productId: number; // Reference to the Product ID
  quantity: number;
}
