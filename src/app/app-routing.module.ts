import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Content1Component } from './pages/content1/content1.component';
import { PagesComponent } from './pages/pages.component';
import { Content2Component } from './pages/content2/content2.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: 'content1', component: Content1Component },
      { path: 'content2', component: Content2Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
