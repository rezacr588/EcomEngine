// src/app/models/cart.model.ts
import { CartItem } from './cart-item.model';
import { User } from './user.model';

export interface Cart {
  id: number;
  user: User;
  items: CartItem[];
}
