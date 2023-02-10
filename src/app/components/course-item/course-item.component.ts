import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CourseItemComponent implements OnInit {

  @Input() course!: Course;

  constructor() { }

  ngOnInit() {}

}
