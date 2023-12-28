import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent {
  productForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private productService: ProductService) {
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
          // Handle successful response, maybe navigate or clear the form
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
