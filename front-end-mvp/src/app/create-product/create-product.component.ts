import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent {
  productForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
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
    console.log(this.productForm);
  }
}
