import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth_service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanLogInGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(!this.auth.isLogedIn()){

      this.router.navigate(['/sign-in']);
      return false;

    }

    return true;

  }
  
}
