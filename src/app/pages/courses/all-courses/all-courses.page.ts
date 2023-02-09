import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service_service/service.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.page.html',
  styleUrls: ['./all-courses.page.scss'],
})
export class AllCoursesPage implements OnInit {

  courses!: Course[];

  constructor(public service: ServiceService) {
    service.getCourses$().subscribe(c => {
      this.courses = c;
    });
  }

  ngOnInit() {
    
  }

}
