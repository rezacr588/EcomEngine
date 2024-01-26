import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'; // Import tap along with map
import { User } from 'src/app/models/user.model';
import { AppStateService } from 'src/app/core/app-state.service';

export interface LoginResponse {
  user: User;
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/api/users/login';

  constructor(
    private http: HttpClient,
    private appStateService: AppStateService
  ) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.loginUrl, { email, password })
      .pipe(
        tap((response: LoginResponse) => {
          // Side effect: Store the JWT token in local storage
          if (response && response.token) {
            localStorage.setItem('jwtToken', response.token);
            this.appStateService.authenticateUser(response.user);
          }
        }),
        map((response) => response as LoginResponse) // This may not be necessary if your response is already typed
      );
  }

  logout() {
    this.appStateService.logoutUser();
  }
}
