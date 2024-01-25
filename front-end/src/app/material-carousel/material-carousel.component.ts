import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-material-carousel',
  templateUrl: './material-carousel.component.html',
  styleUrls: ['./material-carousel.component.css'],
})
export class MaterialCarouselComponent implements OnInit {
  items: Product[] = []; // Array to hold featured products
  activeSlideIndex = 0;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getFeaturedProducts().subscribe(
      (products) => {
        this.items = products;
      },
      (error) => {
        console.error('Error fetching featured products:', error);
      }
    );
  }

  next() {
    this.activeSlideIndex = (this.activeSlideIndex + 1) % this.items.length;
  }

  previous() {
    this.activeSlideIndex =
      (this.activeSlideIndex - 1 + this.items.length) % this.items.length;
  }
}
