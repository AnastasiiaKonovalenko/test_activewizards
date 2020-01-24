import React from 'react';
import PropTypes from 'prop-types';
import Student from '../student/student';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentsList = ({students}) => {
  return(
    <>
      {
        students.map(student => (
          <Student
            name={student.name}
            email={student.email}
            status={student.isActive}
            course={student.course}
            id={student._id}
            key={student._id}
          />
        ))}
    </>
  );
};

StudentsList.propTypes = {
  loadStudentsAndCourses: PropTypes.func.isRequired,
  students: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    index: PropTypes.number,
    isActive: PropTypes.bool.isRequired,
    age: PropTypes.number,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string,
    address: PropTypes.string,
    course__id: PropTypes.string,
    course: PropTypes.string.isRequired,
  })).isRequired,
  courses: PropTypes.arrayOf(PropTypes.shape({
    course: PropTypes.string.isRequired,
    course_id: PropTypes.string.isRequired,
  })).isRequired,
};

export default StudentsList;
