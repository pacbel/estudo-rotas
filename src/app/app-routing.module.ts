import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Content1Component } from './pages/content1/content1.component';
import { PagesComponent } from './pages/pages.component';
import { Content2Component } from './pages/content2/content2.component';
import { NenhumComponent } from './pages/nenhum/nenhum.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: 'dashboard', component: NenhumComponent },
      { path: 'content1', component: Content1Component },
      { path: 'content2', component: Content2Component },
    ]
  },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, {
          preloadingStrategy: PreloadAllModules, // <- comment this line for activate lazy load
          relativeLinkResolution: 'legacy',
          // useHash: true
      })
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
