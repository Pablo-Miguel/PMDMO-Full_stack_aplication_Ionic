import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users_service/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: User;
  logedIn: Boolean

  constructor(private router: Router, private serviceUser: UsersService) {
    serviceUser.getUsers$().subscribe(u => this.user = u[0]);
    this.logedIn = true;
  }

  getMe(): User {
    return this.user;
  }

  isLogedIn(): Boolean {
    return this.logedIn;
  }

  onLogOut(): void {
    this.logedIn = false;
    this.router.navigate(['/sign-in']);
  }

}
