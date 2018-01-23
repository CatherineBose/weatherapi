import { LandingComponent } from './landing/landing.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { WashingtonComponent } from './washington/washington.component';
import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent } from './burbank/burbank.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const APP_ROUTES: Routes = [
    { path: '', component: LandingComponent , pathMatch: 'full' },
    { path: 'seattle', component: SeattleComponent },
    { path: 'sanjose', component: SanjoseComponent },
    { path: 'burbank', component: BurbankComponent },
    { path: 'dallas', component: DallasComponent },
    { path: 'dc', component: WashingtonComponent },
    { path: 'chicago', component: ChicagoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule],
  })
export class AppRoutingModule { }