import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-std-space',
  templateUrl: './std-space.component.html',
  styleUrls: ['./std-space.component.css']
})
export class StdSpaceComponent  {
  courses: Course[];
  error = '';
  searchByName = ''
  searchByLevel = ''



  constructor(private courseService: CourseService, private router: Router) { 
    let user = localStorage.getItem('loggedUser')
    if (!user) {
      this.router.navigate(['/home']);
    }
    else {
      this.searchByName = ''
      this.searchByLevel = ''
      this.getCourses()
    }
  }
 /* ngOnInit(): void {
    let user = localStorage.getItem('loggedUser')
    if (!user) {
      this.router.navigate(['/home']);
    }
    else {
      this.searchByName = ''
      this.searchByLevel = ''
      this.getCourses()
    }
  }*/
  getCourses(): void {
    this.courseService.getAll().subscribe(
      (res: Course[]) => {
        this.courses = res;
        console.log(this.courses)
      },
      (err) => {
        this.error = err;
        console.log('error : ' + this.error)
      }
    );
  }

}
