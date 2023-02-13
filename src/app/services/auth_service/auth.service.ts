import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MyHttpService } from '../my_http_service/my-http.service';
import { MyStorageService } from '../my_storage_service/my-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private logedIn: Boolean

  constructor(private router: Router, private storage: MyStorageService, private http: MyHttpService) {
    if(storage.getToken() != null){
      this.logedIn = true;
    } else {
      this.logedIn = false;
    }
  }

  isLogedIn(): Boolean {
    return this.logedIn;
  }

  logIn(email: string, password: string): boolean {
    if(this.http.logIn(email, password)){
      this.logedIn = true;
      this.router.navigate(['']);
      return true;
    }
    return false;
  }

  onLogIn(): void {
    if(this.http.whoAmI() != null){
      this.logedIn = true;
      this.router.navigate(['']);
    } else {
      this.onLogOut();
    }
  }

  onLogOut(): void {
    this.http.logOut();
    this.logedIn = false;
    this.router.navigate(['/sign-in']);
  }

}
