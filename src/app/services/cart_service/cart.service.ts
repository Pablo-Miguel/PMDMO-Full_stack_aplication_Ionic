import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../auth_service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  user: User;
  cart: Cart[];
  cart$: BehaviorSubject<Cart[]>;

  constructor(private authService: AuthService) {
    this.user = authService.getMe();
    this.cart = [
      {
        id: "1",
        paid: 45.0,
        date: new Date(),
        id_user: "1",
        id_course: "2"
      },
      {
        id: "2",
        paid: 50.0,
        date: new Date(),
        id_user: "2",
        id_course: "1"
      }
    ];

    this.cart$ = new BehaviorSubject<Cart[]>(this.cart.filter(u => u.id_user === this.user.id));
  }

  getCart$(): Observable<Cart[]>{
    return this.cart$.asObservable();
  }

}
