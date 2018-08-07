import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassListComponent } from '@class/class-list/class-list.component';
import { Error404Component } from '@misc/error404/error404.component';

const routes: Routes = [
  { path: '', redirectTo: '/class/list', pathMatch: 'full' },
  { path: 'class/list', component: ClassListComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
