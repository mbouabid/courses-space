import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-myspace',
  templateUrl: './myspace.component.html',
  styleUrls: ['./myspace.component.css']
})
export class MyspaceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let user=JSON.parse(localStorage.getItem('loggedUser'))  
    console.log(user.fname)
  }

}
