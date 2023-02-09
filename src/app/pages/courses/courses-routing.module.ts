import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesPage } from './courses.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: CoursesPage,
    children: [
      {
        path: 'all_courses',
        children: [
          {
            path: '',
            loadChildren: () => import('./all-courses/all-courses.module').then(m => m.AllCoursesPageModule)
          }
        ]
      },
      {
        path: 'own_courses',
        children: [
          {
            path: '',
            loadChildren: () => import('./own-courses/own-courses.module').then(m => m.OwnCoursesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/courses/tabs/all_courses',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/courses/tabs/all_courses',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesPageRoutingModule {}
