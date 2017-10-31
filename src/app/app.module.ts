import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './components/app.component';
import { NgPhysicsModule } from './ng-physics/ng-physics.module';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{path: '', redirectTo: '/home', pathMatch: 'full'},
{path: 'home', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), RouterModule.forRoot(routes), NgPhysicsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
