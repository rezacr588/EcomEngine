import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-featured-products-carousel',
  templateUrl: './featured-products-carousel.component.html',
  styleUrls: ['./featured-products-carousel.component.css'],
})
export class FeaturedProductsCarouselComponent implements OnInit {
  featuredProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getFeaturedProducts().subscribe(
      (products: Product[]) => {
        this.featuredProducts = products;
      },
      (error) => {
        console.error('Error fetching featured products', error);
      }
    );
  }
}
