import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState, AppStateService } from 'src/app/core/app-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  state$!: Observable<AppState>; // Using the non-null assertion operator

  constructor(
    private appStateService: AppStateService,
    private router: Router // Inject Router for navigation after logout
  ) {}

  ngOnInit() {
    this.state$ = this.appStateService.getState();
  }

  logout() {
    this.appStateService.logoutUser(); // Update the application state
    this.router.navigate(['/login']); // Navigate to the login page
  }
}
