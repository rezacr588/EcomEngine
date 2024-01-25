import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/use-cases/users.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  displayedColumns: string[] = ['username', 'email', 'password', 'delete'];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.retrieveUsers();
  }

  retrieveUsers(): void {
    this.usersService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (e) => console.error(e),
    });
  }
  deleteUser(userId: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.usersService.deleteUser(userId).subscribe({
        next: () => {
          // Remove the user from the users array or refresh the list
          this.users = this.users.filter((user) => user.id !== userId);
          // Optionally, show a success message
        },
        error: (e) => {
          console.error(e);
          // Optionally, show an error message
        },
      });
    }
  }
}
