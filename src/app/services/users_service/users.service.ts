import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { CoursesService } from '../courses_service/courses.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[];
  users$: BehaviorSubject<User[]>;

  constructor() {
    this.users = [
      {
        id: "1",
        firstName: "Pablo",
        lastName: "del Castillo",
        email: "Pablo@gmail.com"
      },
      {
        id: "2",
        firstName: "Manu",
        lastName: "Curtido",
        email: "Manu@gmail.com"
      }
    ];

    this.users$ = new BehaviorSubject<User[]>(this.users);
  }

  getUsers$(): Observable<User[]>{
    return this.users$.asObservable();
  }

}
