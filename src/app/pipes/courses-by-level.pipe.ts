import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course';

@Pipe({
  name: 'coursesByLevel'
})
export class CoursesByLevelPipe implements PipeTransform {

  transform(courses: Course [], searchContent :string): Course[] {
    if (!courses || !searchContent)
      return courses
    return courses.filter(course=>course.level.toLowerCase().includes(searchContent.toLowerCase()))
  }

}
