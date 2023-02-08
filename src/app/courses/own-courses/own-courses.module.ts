import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnCoursesPageRoutingModule } from './own-courses-routing.module';

import { OwnCoursesPage } from './own-courses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnCoursesPageRoutingModule
  ],
  declarations: [OwnCoursesPage]
})
export class OwnCoursesPageModule {}
