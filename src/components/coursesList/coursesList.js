import React from 'react';
import Course from '../course/course';
import PropTypes from 'prop-types';

const CoursesList = ({courses}) => {
  return(
    <>
      {
        courses.map(course => (
          <Course
            name={course.course}
            code={course.course_id.replace(/_/, '')}
            key={course.course_id}
            id_del={course.key}
            id={course.course_id}
            isEditing={course.isEditing}
          />
        ))}
    </>
  );
};

CoursesList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    course: PropTypes.string.isRequired,
    course_id: PropTypes.string.isRequired,
  }))
};

export default CoursesList;
