import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  latestProducts: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.getLatestProducts();
  }

  getLatestProducts() {
    this.productService.getLatestProducts().subscribe((products) => {
      this.latestProducts = products;
    });
  }

  navigateToProduct(id: number) {
    this.router.navigate(['/products', id]);
  }
}
