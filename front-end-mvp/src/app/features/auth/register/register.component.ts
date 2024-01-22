import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/core/use-cases/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService // Inject the UsersService
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.usersService.registerUser(this.registerForm.value).subscribe(
        (user) => {
          console.log('Registration successful', user);
          // Handle registration success
        },
        (error) => {
          console.error('Registration failed', error);
          // Handle registration error
        }
      );
    }
  }
}
