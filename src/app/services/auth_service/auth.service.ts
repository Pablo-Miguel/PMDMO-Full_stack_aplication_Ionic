import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MyHttpService } from '../my_http_service/my-http.service';
import { MyStorageService } from '../my_storage_service/my-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private currentUser: User | null = null;
  private logedIn: boolean = false;

  constructor(private router: Router, private storage: MyStorageService, private http: MyHttpService) {
    this.checkStatusLogIn();  
  }

  checkStatusLogIn(): void {
    this.http.whoAmI().subscribe(
      (user: User) => {
        this.currentUser = user;
        this.logedIn = true;
        this.router.navigate(['']);
      },
      (error: ApiError) => {
        this.logedIn = false;
      }
    );
  }

  whoAmI(): User | null {
    return this.currentUser;
  }

  isLogedIn(): boolean {
    return this.logedIn;
  }

  logIn(userToken: UserToken): void {
    this.storage.setToken(userToken.token);
    this.currentUser = userToken.user;
    this.logedIn = true;
    this.router.navigate(['']);
  }

  onLogIn(): void {

  }

  onLogOut(): void {
    this.storage.removeToken();
    this.currentUser = null;
    this.logedIn = false;
    this.router.navigate(['/sign-in']);
  }

}
