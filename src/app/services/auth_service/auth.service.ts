import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logedIn: Boolean

  constructor(private router: Router) {
    this.logedIn = true;
  }

  isLogedIn(): Boolean {
    return this.logedIn;
  }

  onLogOut(): void {
    this.logedIn = false;
    this.router.navigate(['/sign-in']);
  }

}
