import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //@Output() loginEvent :EventEmitter<string> = new EventEmitter()
  
  login : string
  password : string
  error : string

  constructor(private userServive : UserService,private router : Router) { }

  ngOnInit(): void {
    this.error=''
  }
  onSubmit(){
    this.userServive.logUser(this.login,this.password).subscribe(res =>{
      localStorage.setItem('loggedUser', JSON.stringify(res));
      this.userServive.IsloggedIn=true;
      console.log (this.userServive.IsloggedIn)
      if(res) {
        //admin is logged in
        if (res.role=='1'){
          this.router.navigate(['/myspace']);
        }
        if (res.role=='0'){
          this.router.navigate(['/stdspace']);
        }
             
      }
      else if (!res)
      this.error ="your login/password is invalid ";
    }),
    (err)=>this.error='internal server error '+err.message;
	}

  }


