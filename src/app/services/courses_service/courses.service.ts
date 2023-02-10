import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../auth_service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  user: User;
  courses: Course[];
  courses$: BehaviorSubject<Course[]>;

  constructor(private authService: AuthService) {
    this.user = authService.getMe();
    this.courses = [
      {
        id: "1",
        name: "Curso Ionic",
        description: "Curso de 50h de Ionic con Angular.",
        cre8_date: new Date(),
        price: 50.0,
        author: "Pablo del Castillo"
      },
      {
        id: "2",
        name: "Curso Angular",
        description: "Curso de 45h de Angular.",
        cre8_date: new Date(),
        price: 45.0,
        author: "Manu Curtido"
      }
    ];
    
    this.courses$ = new BehaviorSubject<Course[]>(this.courses.filter(c => c.id_user !== this.user.id));
  }

  getCourses$(): Observable<Course[]>{
    return this.courses$.asObservable();
  }

  getOwnCourses(): Course[]{
    return this.courses.filter(c => c.id_user === this.user.id);
  }
  
}
