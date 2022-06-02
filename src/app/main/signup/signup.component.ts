import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user : User=new User()
error :''
  constructor(private userService : UserService, private router:Router
    ,private tostr :ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form){
   /* if (this.user.fname==null||this.user.lname==null||this.user.country==null || this.patient.mail==null||
      this.user.password==null){
      this.error='Veuillez remplir tout les champs obligatoires'
      }             
  else {*/
    //this.error=''
    this.userService.addUser(form.value).subscribe( (data)=>{console.log(data)},
     (err) => {
         this.error = err.message;
     },
     () => {
         //this.success = 'ok';
       this.tostr.success("Votre compte a été créé avec succès"); 
       this.router.navigate(['/login']);
     });
  }

  //}

}
