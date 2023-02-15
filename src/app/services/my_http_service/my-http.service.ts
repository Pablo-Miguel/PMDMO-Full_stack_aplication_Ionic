import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyStorageService } from '../my_storage_service/my-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  status: boolean = false;

  constructor(private storage: MyStorageService, private http: HttpClient) { 
    
  }

  logIn(email: string, password: string): Observable<UserToken> {
    return this.http.post<UserToken>('http://127.0.0.1:3000/users/login', {email, password});
  }
 
  whoAmI(): Observable<User>{
    return this.http.get<User>('http://127.0.0.1:3000/users/whoami');
  }

  signUp(firstName: string, lastName: string, email: string, password: string): Observable<UserToken> {
    return this.http.post<UserToken>('http://127.0.0.1:3000/users/signup', {firstName, lastName, email, password});
  }
  
  logOut(): Observable<Status> {
    return this.http.get<Status>('http://127.0.0.1:3000/users/logout');
  }

  createCourse(name: string, description: string, price: number): Observable<Course> {
    return this.http.post<Course>('http://127.0.0.1:3000/courses/createcourse', {name, description, price});
  }

  getCoursesWorkSpace(): Observable<Course[]> {
    return this.http.get<Course[]>('http://127.0.0.1:3000/courses/mycoursesworkspace');
  }
}
