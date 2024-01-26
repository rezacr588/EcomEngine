// core/app-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

interface AppState {
  isAuthenticated: boolean;
  user: User | null;
}

const initialState: AppState = {
  isAuthenticated: false,
  user: null,
};

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  private state = new BehaviorSubject<AppState>(initialState);

  constructor() {}

  getState() {
    return this.state.asObservable();
  }

  authenticateUser(user: User) {
    this.state.next({ ...this.state.getValue(), isAuthenticated: true, user });
  }

  logoutUser() {
    this.state.next({
      ...this.state.getValue(),
      isAuthenticated: false,
      user: null,
    });
  }
}
