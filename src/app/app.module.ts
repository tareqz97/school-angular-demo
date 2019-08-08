import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule,Routes } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashbordComponent,
    AdminComponent,
    TeacherComponent
  ],
  imports: [
    // RouterModule.forRoot(
    //   appRoutes,// <-- debugging purposes only
    // ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
