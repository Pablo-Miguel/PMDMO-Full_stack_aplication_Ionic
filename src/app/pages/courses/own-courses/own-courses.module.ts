import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnCoursesPageRoutingModule } from './own-courses-routing.module';

import { OwnCoursesPage } from './own-courses.page';
import { CourseItemComponent } from 'src/app/components/course-item/course-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnCoursesPageRoutingModule,
    CourseItemComponent
  ],
  declarations: [
    OwnCoursesPage
  ]
})
export class OwnCoursesPageModule {}
