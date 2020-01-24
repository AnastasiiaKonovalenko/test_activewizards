import React from 'react';
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

export default StudentsList;
