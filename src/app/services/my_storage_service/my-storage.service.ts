import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyStorageService {

  constructor() { 

  }
  
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    console.log(token);
    localStorage.setItem('token', token);
    console.log(localStorage.getItem('token'));
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }
}
