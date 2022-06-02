import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course';

@Pipe({
  name: 'coursesByName'
})
export class CoursesByNamePipe implements PipeTransform {

  transform(courses: Course [], searchContent :string): Course[] {
    if (!courses || !searchContent)
      return courses
      return courses.filter(course=>course.title.toLowerCase().includes(searchContent.toLowerCase()) || course.description.toLowerCase().includes(searchContent.toLowerCase()))
  }

}
