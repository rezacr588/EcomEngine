import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  featuredProducts: Product[] = []; // Add your featured products data here
  currentSlideIndex: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getFeaturedProducts();
  }

  getFeaturedProducts() {
    this.productService.getFeaturedProducts().subscribe((products) => {
      this.featuredProducts = products;
      this.currentSlide(1); // Start with the first slide
    });
  }

  nextSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex + 1) % this.featuredProducts.length;
    this.currentSlide(this.currentSlideIndex + 1);
  }

  previousSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.featuredProducts.length) %
      this.featuredProducts.length;
    this.currentSlide(this.currentSlideIndex + 1);
  }

  currentSlide(index: number) {
    this.currentSlideIndex = index - 1;
    // Add logic to change slide based on index
  }
}
