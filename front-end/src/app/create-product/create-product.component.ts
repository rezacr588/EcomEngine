import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent {
  productForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router // Inject Router
  ) {
    this.createForm();
  }

  createForm() {
    this.productForm = this.fb.group({
      name: [''],
      price: [''],
      description: [''],
      category: [''],
      imageUrl: [''],
      featured: [false],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe({
        next: (response) => {
          console.log('Product added successfully', response);
          // Navigate to the product list page
          this.router.navigate(['/dashboard/product-list']);
        },
        error: (error) => {
          console.error('Error adding product', error);
          // Handle error response
        },
      });
    } else {
      console.log('Form is not valid');
    }
  }
}
