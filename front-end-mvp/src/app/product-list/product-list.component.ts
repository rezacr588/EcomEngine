// src/app/product-list/product-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
    });
  }

  handleImageError(event: any) {
    event.target.style.display = 'none';
    event.target.nextElementSibling.style.display = 'block';
  }

  deleteProduct(id: number | undefined) {
    if (confirm('Are you sure you want to delete this product?') && id) {
      this.productService.removeProduct(id).subscribe({
        next: () => {
          this.loadProducts(); // Reload the list to reflect the deletion
        },
        error: (err) => {
          console.error('Error deleting product:', err);
        },
      });
    }
  }
}
