import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/core/use-cases/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private snackBar: MatSnackBar,
    private router: Router
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
          this.snackBar.open('Registration successful!', 'Close', {
            duration: 3000,
          });
          console.log('Registration successful', user);

          // Redirect to the login page
          this.router.navigate(['/auth/login']);
        },
        (error) => {
          this.snackBar.open(
            'Registration failed. Please try again.',
            'Close',
            {
              duration: 3000,
            }
          );
          console.error('Registration failed', error);
        }
      );
    } else {
      this.snackBar.open('Please fill out the form correctly.', 'Close', {
        duration: 3000,
      });
    }
  }
}
