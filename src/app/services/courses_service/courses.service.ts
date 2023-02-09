import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courses: Course[];
  courses$: BehaviorSubject<Course[]>;

  constructor() {
    this.courses = [
      {
        id: "1",
        name: "Curso Ionic",
        description: "Curso de 50h de Ionic con Angular.",
        cre8_date: new Date(),
        price: 50.0,
        author: "Pablo del Castillo",
        id_user: "1"
      },
      {
        id: "2",
        name: "Curso Angular",
        description: "Curso de 45h de Angular.",
        cre8_date: new Date(),
        price: 45.0,
        author: "Manu Curtido",
        id_user: "2"
      }
    ];
    
    this.courses$ = new BehaviorSubject<Course[]>(this.courses);
  }

  getCourses$(): Observable<Course[]>{
    return this.courses$.asObservable();
  }
  
}
