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

  signUp(user: User): void {
    
  }
  
  logOut(): void {
    
  }
}
