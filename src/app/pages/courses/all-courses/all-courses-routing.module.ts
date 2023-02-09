import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCoursesPage } from './all-courses.page';

const routes: Routes = [
  {
    path: '',
    component: AllCoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllCoursesPageRoutingModule {}
