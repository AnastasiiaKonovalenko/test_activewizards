import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';
import { Form, Col } from 'react-bootstrap';
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
import './courses.scss';
import { useLocalStorage } from '../../useLocalStorrage';

const Courses
  = ({ courses, setQuery, queryCourse, setNewCourse, setIsActiveCoursesForm, isActiveFormCourses }) => {
  const [inputQuery, setInputQuery] = useLocalStorage('inputQuery','');
  const [nameValue, setNameValue] = useLocalStorage('nameValue', '');
  const [codeValue, setCodeValue] = useLocalStorage('codeValue', '');
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
    <section className="courses">
      <div className="table">
        <Form
          className="query courses__query"
        >
          <Form.Row>
            <Col>
              <Form.Control
                className="query__input"
                placeholder="Search..."
                type="text"
                value={inputQuery}
                onChange={handleChangeQuery}
              />
            </Col>
          </Form.Row>
        </Form>
        <div className="add courses__add">
          {isActiveFormCourses ? (
            <>
              <button
                className="students__activation_form"
                onClick={setIsActiveCoursesForm}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fillRule="evenodd" clipRule="evenodd">
                  <path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5
              11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5
              10.5-10.5zm-6.5 10h13v1h-13v-1z"/>
                </svg>
              </button>
              <Form
                className="courses__form"
                onSubmit={handlerFormSubmit}
              >
                <Form.Row>
                <Col>
                  <Form.Control
                    type="text"
                    onChange={(event) => setNameValue(event.target.value)}
                    value={nameValue}
                    placeholder="Write Name"
                  />
                </Col>

                <Col>
                  <Form.Control
                    type="text"
                    onChange={(event) => setCodeValue(event.target.value)}
                    value={codeValue}
                    placeholder="Write Code"
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="submit"
                  />
                </Col>
              </Form.Row>
            </Form>
            </>
          ) : (
            <button
              className="students__activation_form students__button"
              onClick={setIsActiveCoursesForm}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fillRule="evenodd" clipRule="evenodd">
                <path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5
            11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5
            10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"/>
              </svg>
            </button>
          )}
        </div>

          <div className="table__row">
            <div
              className="table__ceil sort"
              onClick={() => sortCourses('course')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/></svg>
              COURSE
            </div>
            <div
              className="table__ceil"
            >
             CODE
            </div>
            <div
              className="table__ceil"
            >
              ACTION
            </div>
          </div>

          <CoursesList courses={sortedCourses} />

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


Courses.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    course: PropTypes.string.isRequired,
    course_id: PropTypes.string.isRequired,
  })).isRequired,
  setQuery: PropTypes.func.isRequired,
  queryCourse: PropTypes.string,
  setNewCourse: PropTypes.func.isRequired,
  setIsActiveCoursesForm: PropTypes.func.isRequired,
  isActiveFormCourses: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
