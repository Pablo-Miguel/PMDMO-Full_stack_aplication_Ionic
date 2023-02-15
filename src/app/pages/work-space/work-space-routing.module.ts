import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkSpacePage } from './work-space.page';

const routes: Routes = [
  {
    path: '',
    component: WorkSpacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkSpacePageRoutingModule {}
