import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkSpacePageRoutingModule } from './work-space-routing.module';

import { WorkSpacePage } from './work-space.page';
import { CourseItemComponent } from 'src/app/components/course-item/course-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    WorkSpacePageRoutingModule,
    CourseItemComponent
  ],
  declarations: [WorkSpacePage]
})
export class WorkSpacePageModule {}
