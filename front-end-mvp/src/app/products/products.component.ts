import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  latestProducts: Product[] = [];
  currentSlideIndex: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getLatestProducts();
  }

  getLatestProducts() {
    this.productService.getLatestProducts().subscribe((products) => {
      this.latestProducts = products;
    });
  }
}
