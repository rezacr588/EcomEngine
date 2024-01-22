import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
