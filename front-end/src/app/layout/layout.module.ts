import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule if your header or footer uses routerLink
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatToolbarModule,
    RouterModule, // Import RouterModule here to use routerLink in your components
  ],
  exports: [
    // Export HeaderComponent and FooterComponent so they can be used outside this module
    HeaderComponent,
    FooterComponent,
  ],
})
export class LayoutModule {}
