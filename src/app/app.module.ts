import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './components/app.component';
import { NgPhysicsModule } from './ng-physics/ng-physics.module';
import { HomeComponent } from './components/home/home.component';
import { NgStatisticsModule } from './ng-statistics/ng-statistics.module';

const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), NgPhysicsModule.forRoot(),
    NgStatisticsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
