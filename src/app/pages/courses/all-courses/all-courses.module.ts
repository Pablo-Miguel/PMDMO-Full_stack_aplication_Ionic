import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllCoursesPageRoutingModule } from './all-courses-routing.module';

import { AllCoursesPage } from './all-courses.page';
import { CourseItemComponent } from 'src/app/components/course-item/course-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllCoursesPageRoutingModule,
    CourseItemComponent
  ],
  declarations: [
    AllCoursesPage
  ]
})
export class AllCoursesPageModule {}
