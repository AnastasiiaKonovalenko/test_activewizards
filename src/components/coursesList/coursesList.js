import React from 'react';
import Course from '../course/course';

const CoursesList = ({courses}) => {
  return(
    <>
      {
        courses.map(course => (
          <Course
            name={course.course}
            code={course.course_id.replace(/_/, '')}
            key={course.course_id}
            id={course.course_id}
          />
        ))}
    </>
  );
};

export default CoursesList;
