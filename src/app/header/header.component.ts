import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  profil =''

  constructor(public userService :UserService, private router : Router) { }

  ngOnInit(): void {
    let user :User
    user =JSON.parse(localStorage.getItem('loggedUser')) 
    if (user){
      this.userService.IsloggedIn=true
      this.profil=user.role
      console.log(this.profil)
    }
    
    else
    this.userService.IsloggedIn=false
    console.log('form header : '+this.userService.IsloggedIn)
  }
  signOut(){
    localStorage.removeItem('loggedUser');
   // this.router.navigate(['/home'])
    this.userService.IsloggedIn=false

  }
 

}
