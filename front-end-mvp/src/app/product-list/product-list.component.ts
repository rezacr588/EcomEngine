// src/app/product-list/product-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model'; // Adjust the path as necessary
import { ProductService } from '../product.service'; // Adjust the path as necessary

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
}
