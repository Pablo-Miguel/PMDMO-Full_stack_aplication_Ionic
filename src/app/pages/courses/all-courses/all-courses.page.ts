import { AfterContentChecked, Component } from '@angular/core';
import { MyHttpService } from 'src/app/services/my_http_service/my-http.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.page.html',
  styleUrls: ['./all-courses.page.scss'],
})
export class AllCoursesPage {

  courses: Course[];

  constructor(private http: MyHttpService) {
    this.courses = [];
  }

  ionViewDidEnter() {
    this.http.getAllCourses().subscribe(
      (data: Course[]) => {
        this.courses = data;
      }
    );
  }

}
