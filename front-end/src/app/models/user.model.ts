export class User {
  id?: number;
  username: string;
  password: string;
  email: string;
  active: boolean;
  firstName?: string;
  lastName?: string;
  resetToken?: string;
  phoneNumber?: string;
  gender?: string; // You might want to use an enum for gender
  dateOfBirth?: Date;
  createdAt?: Date;
  lastModified?: Date;

  constructor() {
    this.username = '';
    this.password = '';
    this.email = '';
    this.active = true;
  }
}
