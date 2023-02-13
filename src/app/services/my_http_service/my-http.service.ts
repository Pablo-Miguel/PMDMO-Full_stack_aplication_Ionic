import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyStorageService } from '../my_storage_service/my-storage.service';

@Injectable({
  providedIn: 'root'
})
export class MyHttpService {

  status: boolean = false;

  constructor(private myStorage: MyStorageService, private http: HttpClient) { 
    
  }

  logIn(email: string, password: string): boolean {
    this.status = true;

    this.http.post<User>('http://127.0.0.1:3000/users/login', {email, password}).subscribe((data: any) => {
      if(data.hasOwnProperty("error")){
        this.status = false;
      } else {
        this.myStorage.setToken(data.token);
      }
    });

    return this.status;
  }
 
  whoAmI(): User | null{
    let user: User | null = null;
    this.http.get('http://localhost:3000/users/whoami').subscribe((data: any) => {
      if(!data.hasOwnProperty("error")){
        user = data;
      }
    });

    return user;
  }

  signUp(user: User): boolean {
    this.status = false;
    this.http.post('http://localhost:3000/users/signup', user).subscribe((data: any) => {
      if(data.hasOwnProperty("error")){
        console.log(data.error);
      } else {
        this.myStorage.setToken(data.token);
        this.status = true;
      }
    });

    return this.status;
  }
  
  logOut(): boolean {
    this.status = false;

    this.http.get('http://localhost:3000/users/logout').subscribe((data: any) => {
      if(data.hasOwnProperty("status")){
        this.myStorage.removeToken();
        this.status = true;
      }
    });

    return this.status;
  }
}
