import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featuredProducts: Product[] = [];
  currentSlideIndex: number = 0;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.getFeaturedProducts();
  }

  getFeaturedProducts() {
    this.productService.getFeaturedProducts().subscribe((products) => {
      this.featuredProducts = products;
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

  navigateToProduct(id: number) {
    this.router.navigate(['/products', id]);
  }
}
