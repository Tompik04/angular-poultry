import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoultryAboutComponent } from './poultry-about/poultry-about.component';
import { PoultryBuysComponent } from './poultry-buys/poultry-buys.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chickens',
    pathMatch: 'full'
  },
  {
    path: 'chickens',
    component: PoultryBuysComponent
  },
  {
  path: 'about',
  component: PoultryAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
