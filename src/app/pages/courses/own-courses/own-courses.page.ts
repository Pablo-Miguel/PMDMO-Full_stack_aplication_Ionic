import { Component, OnInit } from '@angular/core';
import { MyHttpService } from 'src/app/services/my_http_service/my-http.service';

@Component({
  selector: 'app-own-courses',
  templateUrl: './own-courses.page.html',
  styleUrls: ['./own-courses.page.scss'],
})
export class OwnCoursesPage implements OnInit {

  courses: Course[];

  constructor(private http: MyHttpService) {
    this.courses = [];
  }

  ngOnInit() {
    this.refreshCourses();
  }

  refreshCourses(){
    this.http.getOwnCourses().subscribe(
      (data: Course[]) => {
        this.courses = data;
      }
    );
  }

}
