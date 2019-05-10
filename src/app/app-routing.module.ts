import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {InformationComponent} from './information/information.component';
import {AppComponent} from './app.component';
import {AuthGuard} from './services/protect/auth-guard.service';
import {SecuredComponent} from './secured/secured.component';
import {SummaryComponent} from './summary/summary.component';

const routes: Routes = [
  {path: '', component: InformationComponent},
  {
    path: 'secured',
    canActivate: [AuthGuard],
    component: SecuredComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {path: 'info', component: InformationComponent},
  {path: 'summary', component: SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
