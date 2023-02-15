import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-own-courses',
  templateUrl: './own-courses.page.html',
  styleUrls: ['./own-courses.page.scss'],
})
export class OwnCoursesPage implements OnInit {

  courses!: Course[];

  constructor() {
  }

  ngOnInit() {
  }

}
