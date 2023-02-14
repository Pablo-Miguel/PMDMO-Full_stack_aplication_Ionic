import { Component } from '@angular/core';
import { AuthService } from './services/auth_service/auth.service';
import { MyHttpService } from './services/my_http_service/my-http.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public auth: AuthService, private http: MyHttpService) {

  }
  
  logOut() {
    this.http.logOut().subscribe(
      (data: Status) => {
        console.log(data);
        this.auth.onLogOut();
      }, (error: any) => {
        console.log(error);
      }
    );

  }
}
