import React, { useState } from 'react';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';
import CoursesList from '../coursesList/coursesList';
import {
  getIsActiveCoursesForm,
  getQueryCourse,
} from '../../store/selectors';
import {
  addNewCourse,
  changeQueryCourse,
  toggleFormCourses,
} from '../../store/actions';
import {
  useHistory,
  useLocation,
} from 'react-router-dom';

const Courses = ({ courses, setQuery, queryCourse, setNewCourse, setIsActiveCoursesForm, isActiveFormCourses, setHasErrorCourse, hasErrorCourse}) => {
  const [inputQuery, setInputQuery] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [codeValue, setCodeValue] = useState('');
  const location = useLocation();
  const history = useHistory();

  const debouncedSetQuery = debounce(setQuery, 1000);

  const handleChangeQuery = (evt) => {
    debouncedSetQuery(evt.target.value);
    setInputQuery(evt.target.value);
    searchParams.set('query', evt.target.value.trim().toLowerCase());
    historyPush();
  };

  const historyPush = debounce(() => {
    history.push({ search: searchParams.toString() });
  }, 1000);

  const coursesAfterQuery = !queryCourse
    ? courses
    : courses.filter(item => item.course.toLowerCase()
        .includes(queryCourse.toLowerCase()));

  const searchParams = new URLSearchParams(location.search);

  let sortedCourses = '';

  const sortParam = searchParams.get('sort');

  if (sortParam) {
    sortedCourses
      = (typeof courses[0][sortParam] === 'number'
      || typeof courses[0][sortParam] === 'boolean')
      ? [...coursesAfterQuery]
        .sort((a, b) => (a[sortParam] - b[sortParam])
          * (searchParams.get('orderOfSorting') === 'asc' ? 1 : -1))
      : [...coursesAfterQuery]
        .sort((a, b) => (a[sortParam].localeCompare(b[sortParam]))
          * (searchParams.get('orderOfSorting') === 'asc' ? 1 : -1));
  } else {
    sortedCourses = coursesAfterQuery;
  }

  const sortCourses = (param) => {
    searchParams.set('sort', param);

    if (searchParams.get('sort') === param
      && searchParams.get('orderOfSorting') === 'asc') {
      searchParams.set('orderOfSorting', 'desc');
    } else {
      searchParams.set('orderOfSorting', 'asc');
    }

    history.push({ search: searchParams.toString() });
  };

  const handlerFormSubmit = (event) => {
    event.preventDefault();
    if(!nameValue || !codeValue) {
      return;
    }
    setNewCourse(nameValue, codeValue);

  };

  return (
    <section>
      {isActiveFormCourses ? (
        <>
          <button
            onClick={setIsActiveCoursesForm}
          >
            formAdd
          </button>
          <form
            onSubmit={handlerFormSubmit}
          >
            <label htmlFor="filter">
              <legend>
                Course
              </legend>
              <input
                id="filter"
                type="text"
                onChange={(event) => setNameValue(event.target.value)}
                value={nameValue}
                placeholder="Write here..."
              />
            </label>

            <label htmlFor="code">
              <legend>
              Code
              </legend>
              <input
                id="code"
                type="text"
                onChange={(event) => setCodeValue(event.target.value)}
                placeholder="Write here..."
                value={codeValue}
              />
            </label>
            <input
              type="submit"
            />
          </form>
        </>
      ) : (
        <button
          onClick={setIsActiveCoursesForm}
        >
          formAdd
        </button>
      )}
      <input
        type="text"
        value={inputQuery}
        onChange={handleChangeQuery}
      />
      <div className="table">

          <div className="table__row">
            <div
              className="table__ceil"
              onClick={() => sortCourses('course')}
            >
              Course
            </div>
            <div
              className="table__ceil"
            >
             Code
            </div>
            <div
              className="table__ceil"
            >
              Action
            </div>
          </div>

          <CoursesList courses={sortedCourses}/>

      </div>
    </section>
  );
};
const mapStateToProps = state => ({
  queryCourse: getQueryCourse(state),
  courses: state.courses,
  isActiveFormCourses: getIsActiveCoursesForm(state),
});

const mapDispatchToProps = ({
  setQuery: changeQueryCourse,
  setIsActiveCoursesForm: toggleFormCourses,
  setNewCourse: addNewCourse,
});

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
