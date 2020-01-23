import React, { useState } from 'react';
import { getCourses, getStudents } from '../../api/loadApi';

const Courses = () => {
const [isLoad, setIsLoad] = useState(false);
  const [students, setStudents] = useState([]);

  const loadData = async() => {
    setIsLoad(true)
    const [
      studentsFromServer,
      coursesFromServer
    ] = await Promise.all([
      getStudents(),
      getCourses(),
    ]);

    setStudents(studentsFromServer)

  };



  return (
    <div>
      {isLoad ? (
        students.map(item => <p>{item.email}</p>)
      ) : (
        <button
          onClick={loadData}
        >
          Load
        </button>
      )}

    </div>
  );
};

export default Courses;
