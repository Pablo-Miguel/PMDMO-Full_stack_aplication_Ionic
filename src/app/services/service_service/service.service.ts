import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoursesService } from '../courses_service/courses.service';
import { UsersService } from '../users_service/users.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  users!: User[];
  courses!: Course[];

  constructor(private usersService: UsersService, private coursesService: CoursesService) {
    usersService.getUsers$().subscribe(u => {
      this.users = u;
    });
    coursesService.getCourses$().subscribe(c => {
      this.courses = c;
    });
  }

  getUsers$(): Observable<User[]>{
    return this.usersService.getUsers$();
  }

  getCourses$(): Observable<Course[]>{
    return this.coursesService.getCourses$();
  }

  getUserCourses(user: User): Course[]{
    return this.courses.filter(c => c.id_user === user.id);
  }

}
