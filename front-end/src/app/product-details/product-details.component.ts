import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../services/cart.service'; // Ensure CartService is imported
import { Product } from '../models/product.model';
import { AppStateService } from '../core/app-state.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  quantity: number = 1;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private appStateService: AppStateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.getProductById(id);
    });
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
    });
  }

  addToCart(product: Product, quantity: number) {
    let userId: number | undefined;

    this.appStateService.getState().subscribe((state) => {
      userId = state.user?.id; // Extract user ID from AppState
    });

    if (userId && product.id) {
      this.cartService.addItemToCart(userId, product.id, quantity).subscribe({
        next: (cart) => {
          console.log('Product added to cart', cart);
          // Handle successful addition (e.g., show notification)
        },
        error: (error) => {
          console.error('Error adding product to cart:', error);
          // Handle error (e.g., show error message)
        },
      });
    } else {
      console.error('User ID or Product ID is missing');
      // Handle missing ID (e.g., show error message)
    }
  }
}
