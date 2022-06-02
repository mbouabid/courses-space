import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './main/home/home.component';
import { ContactComponent } from './main/contact/contact.component';
import { LoginComponent } from './main/login/login.component';
import { SignupComponent } from './main/signup/signup.component';
import { CoursesComponent } from './main/intra/me/courses/courses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyspaceComponent } from './main/intra/me/myspace/myspace.component';
import { CoursesListComponent } from './main/intra/me/courses-list/courses-list.component';
import { StdSpaceComponent } from './main/intra/std/std-space/std-space.component';
import { CoursesByNamePipe } from './pipes/courses-by-name.pipe';
import { CoursesByLevelPipe } from './pipes/courses-by-level.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    CoursesComponent,
    MyspaceComponent,
    CoursesListComponent,
    StdSpaceComponent,
    CoursesByNamePipe,
    CoursesByLevelPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    [ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
