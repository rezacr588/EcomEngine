import { Component } from '@angular/core';
import { AuthService } from './features/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front-end-mvp';
  constructor(private authService: AuthService) {}

  ngOnInit() {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      this.authService.fetchCurrentUser().subscribe();
    }
  }
}
