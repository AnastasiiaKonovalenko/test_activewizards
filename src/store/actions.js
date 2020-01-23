import { getCourses, getStudents } from '../api/loadApi';

export const LOAD_STUDENTS_SUCCESS = 'LOAD_STUDENTS_SUCCESS';
export const LOAD_COURSES_SUCCESS = 'LOAD_COURSES_SUCCESS';
export const CHANGE_QUERY_COURSE = 'CHANGE_QUERY_COURSE';
export const CHANGE_QUERY_STUDENT = 'CHANGE_QUERY_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const DELETE_COURSE = 'DELETE_COURSE';
export const CHANGE_NAME = 'CHANGE_NAME';
export const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT';
export const ADD_NEW_COURSE = 'ADD_NEW_COURSE';
export const FORM_IS_ACTIVE = 'FORM_IS_ACTIVE';
export const FORM_COURSES_IS_ACTIVE = 'FORM_COURSES_IS_ACTIVE';

const loadStudentsSuccess = students => ({
  type: LOAD_STUDENTS_SUCCESS, students,
});

const loadCoursesSuccess = courses => ({
  type: LOAD_COURSES_SUCCESS, courses,
});

export const changeQueryCourse = queryCourse => ({
  type: CHANGE_QUERY_COURSE, queryCourse,
});

export const changeQueryStudent = queryStudent => ({
  type: CHANGE_QUERY_STUDENT, queryStudent,
});

export const deleteStudent = id => ({
  type: DELETE_STUDENT, id,
});

export const deleteCourse = id => ({
  type: DELETE_COURSE, id,
});

export const toggleForm = () => ({
  type: FORM_IS_ACTIVE,
});

export const toggleFormCourses = () => ({
  type: FORM_COURSES_IS_ACTIVE,
});

export const addNewStudent =  (name, email, isActive, course) => ({
  type: ADD_NEW_STUDENT,
  name,
  email,
  isActive,
  course,
  id: '_' + Math.random().toString(36).substr(2, 9),
});

export const addNewCourse =  (course, id) => ({
  type: ADD_NEW_COURSE, course, id
});

export const loadData = () => async (dispatch) => {

  const [
    studentsFromServer,
    coursesFromServer
  ] = await Promise.all([
    getStudents(),
    getCourses(),
  ]);

  dispatch(loadStudentsSuccess(studentsFromServer.map(student => (
    {
      ...student,
      course: coursesFromServer.find(course => course.course_id === student.course__id).course,
      name: `${student.name.first} ${student.name.last} `
    }))));

  dispatch(loadCoursesSuccess(coursesFromServer));
};
