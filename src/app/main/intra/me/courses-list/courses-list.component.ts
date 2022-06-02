import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  @Input() aCourse : Course
  @Output() childEvent :EventEmitter<Course> = new EventEmitter()
  @Output() childEvent2 :EventEmitter<string> = new EventEmitter()
  courses : Course[]
  error =''
  
  constructor(public courseService :CourseService) { }

  ngOnInit(): void {
  }

  select(course){
    /*this.courseService.selectedCourse=course;
    this.courseService.selected=true;
    console.log(this.courseService.selectedCourse)*/
    this.childEvent.emit(course)
  }
  delete(course){
    if(confirm("Are you sure to delete "+course.title)) {
      this.courseService.deleteCourse(course).subscribe(
        (res)=>{console.log(res)},
        (err)=>{console.log('errror')},
        ()=>{this.childEvent2.emit('deleteOp')}
        )

    }
    
  }


}
