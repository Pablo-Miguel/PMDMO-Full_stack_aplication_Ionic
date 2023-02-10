import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../auth_service/auth.service';
import { CartService } from '../cart_service/cart.service';
import { CoursesService } from '../courses_service/courses.service';
import { UsersService } from '../users_service/users.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  cart!: Cart[];
  courses!: Course[];

  constructor(private usersService: UsersService, private cartService: CartService, private coursesService: CoursesService) {
    cartService.getCart$().subscribe(u => {
      this.cart = u;
    });
    coursesService.getCourses$().subscribe(c => {
      this.courses = c;
    });
  }

  getCourses(): Observable<Course[]> {
    return this.coursesService.getCourses$();
  }

  getOwnCourses(): Course[] {
    return this.coursesService.getOwnCourses();
  }

  getPaidCourses(): Course[] {
    return this.courses.filter(c => {
      this.cart.some(ca => ca.id_course == c.id)
    });
  }

}
