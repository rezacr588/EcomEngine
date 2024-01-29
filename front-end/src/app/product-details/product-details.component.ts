import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = +params['id']; // The '+' converts the string to a number
      this.getProductById(id);
    });
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
    });
  }

  addToCart(product: any) {
    // Implement the logic to add the product to the cart
    console.log('Adding to cart:', product);
    // You might want to inject a service here that handles the cart logic
  }
}
