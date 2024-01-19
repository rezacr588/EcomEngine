import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  featuredProducts: Product[] = [];
  latestProducts: Product[] = [];
  currentSlideIndex: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getFeaturedProducts();
    this.getLatestProducts();
  }

  getFeaturedProducts() {
    this.productService.getFeaturedProducts().subscribe((products) => {
      this.featuredProducts = products;
    });
  }

  getLatestProducts() {
    this.productService.getLatestProducts().subscribe((products) => {
      this.latestProducts = products;
    });
  }

  nextSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex + 1) % this.featuredProducts.length;
  }

  previousSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.featuredProducts.length) %
      this.featuredProducts.length;
  }
}
