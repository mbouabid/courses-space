import { CoursesByNamePipe } from './courses-by-name.pipe';

describe('CoursesByNamePipe', () => {
  it('create an instance', () => {
    const pipe = new CoursesByNamePipe();
    expect(pipe).toBeTruthy();
  });
});
