import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './main/contact/contact.component';
import { HomeComponent } from './main/home/home.component';
import { MyspaceComponent } from './main/intra/me/myspace/myspace.component';
import { StdSpaceComponent } from './main/intra/std/std-space/std-space.component';
import { LoginComponent } from './main/login/login.component';
import { SignupComponent } from './main/signup/signup.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'myspace', component: MyspaceComponent },
  { path: 'stdspace', component: StdSpaceComponent},
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
