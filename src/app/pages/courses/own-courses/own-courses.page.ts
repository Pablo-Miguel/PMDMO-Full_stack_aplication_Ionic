import { Component } from '@angular/core';
import { MyHttpService } from 'src/app/services/my_http_service/my-http.service';

@Component({
  selector: 'app-own-courses',
  templateUrl: './own-courses.page.html',
  styleUrls: ['./own-courses.page.scss'],
})
export class OwnCoursesPage {

  courses: Course[];

  constructor(private http: MyHttpService) {
    this.courses = [];
  }

  ionViewDidEnter() {
    this.http.getOwnCourses().subscribe(
      (data: Course[]) => {
        this.courses = data;
      }
    );
  }

}
