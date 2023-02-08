import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnCoursesPage } from './own-courses.page';

const routes: Routes = [
  {
    path: '',
    component: OwnCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnCoursesPageRoutingModule {}
