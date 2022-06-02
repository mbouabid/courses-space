import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  selectedCourse: Course = new Course()
  selected: boolean = false;
  parentEvent(event) {
    this.selectedCourse = event
    this.selected = true
  }
  parentEvent2(event) {
    this.getCourses()
  }
  course: Course = new Course()
  error = ''
  myForm = new FormGroup({
    //name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    level: new FormControl('', [Validators.required])

  });
  baseUrl = '/api';
  courses: Course[];

  constructor(public courseService: CourseService, private http: HttpClient) {
    this.getCourses();
  }


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

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }

  submit() {
    //add new course
    if (!this.selected) {
      const formData = new FormData();
      formData.append('file', this.myForm.get('fileSource').value);
      this.http.post(`${this.baseUrl}/upload.php`, formData)
        .subscribe(res => {
          console.log('uploaded sucessfully')
        })
      this.courseService.addCourse(this.myForm.value).subscribe((data) => {
        console.log('added');
      },
        (err) => { this.error = err.message; },
        () => {
          this.getCourses();
          this.myForm.reset();
        }

      );

    }
    // update an existing course
    else {
      this.courseService.updateCourse(this.myForm.value).subscribe(
        (res) => { console.log(res) },
        (err) => { this.error = err.message; },
        () => {
          this.getCourses();
          this.selected = false;
          this.myForm.reset();
        });
    }

  }


  /*onSubmit(form){
     this.courseService.addCourse(form.value).subscribe( 
       (data)=>{
         console.log(data)},
       (err) => {
          this.error = err.message;}
      ,
      () => {
        //this.router.navigate(['/login']);
      }
      );
   }*/


}
