import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service_service/service.service';

@Component({
  selector: 'app-own-courses',
  templateUrl: './own-courses.page.html',
  styleUrls: ['./own-courses.page.scss'],
})
export class OwnCoursesPage implements OnInit {

  courses!: Course[];

  constructor(public service: ServiceService) {
  }

  ngOnInit() {
  }

}
