import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseUrl = '/api';
  courses :Course []
  constructor(private http: HttpClient) { }
  addCourse(course: Course): Observable<Course>{  
    return this.http.post<Course>(`${this.baseUrl}/addCourse.php`,course);
  }
  updateCourse(course: Course): Observable<Course>{  
    return this.http.post<Course>(`${this.baseUrl}/updateCourse.php`,course);
  }
  deleteCourse (course :Course) :Observable<Course>{
    return this.http.post<Course>(`${this.baseUrl}/deleteCourse.php`,course)
  }
  getAll(): Observable<Course[]> {
    return this.http.get(`${this.baseUrl}/getCourses.php`).pipe(
      map((res) => {
        this.courses = res['data'];
        return this.courses;
    }));
  }
}
