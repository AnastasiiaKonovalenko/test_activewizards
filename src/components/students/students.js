import React from 'react';
import PropTypes from 'prop-types';
import { Form, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import StudentsList from '../studentsList/StudentsList';
import debounce from 'lodash/debounce';
import { getIsActiveForm, getQueryStudent } from '../../store/selectors';
import { changeQueryStudent, addNewStudent, toggleForm } from '../../store/actions';
import {
  useHistory,
  useLocation,
} from 'react-router-dom';
import './students.scss';
import { useLocalStorage } from '../../useLocalStorrage';

const Students
  = ({students, queryStudent, setQuery, setNewStudent, isActiveForm, setIsActiveForm, setChangeStudent }) => {
  const [inputQue, setInputQue] = useLocalStorage('inputQue', '');
  const [nameValueStudent, setNameValueStudent] = useLocalStorage('nameValueStudent', '');
  const [emailValue, setEmailValue] = useLocalStorage('emailValue', '');
  const [statusValue, setStatusValue] = useLocalStorage('statusValue', '');
  const [courseValue, setCourseValue] = useLocalStorage('courseValue', '');
  const location = useLocation();
  const history = useHistory();

  const debouncedSetQuery = debounce(setQuery, 1000);

  const handleChangeQuery = (evt) => {
    debouncedSetQuery(evt.target.value);
    setInputQue(evt.target.value);
    searchParams.set('query', evt.target.value.trim().toLowerCase());
    historyPush();
  };

  const studentsAfterQuery = !queryStudent
    ? students
    : students.filter(item => item.name.toLowerCase()
        .includes(queryStudent.toLowerCase()));

  const searchParams = new URLSearchParams(location.search);

  let sortedStudents = '';

  const sortParam = searchParams.get('sort');

  if (sortParam) {
    sortedStudents
      = (typeof students[0][sortParam] === 'number'
      || typeof students[0][sortParam] === 'boolean')
      ? [...studentsAfterQuery]
        .sort((a, b) => (a[sortParam] - b[sortParam])
          * (searchParams.get('orderOfSorting') === 'asc' ? 1 : -1))
      : [...studentsAfterQuery]
        .sort((a, b) => (a[sortParam].localeCompare(b[sortParam]))
          * (searchParams.get('orderOfSorting') === 'asc' ? 1 : -1));
  } else {
    sortedStudents = studentsAfterQuery;
  }

  const historyPush = debounce(() => {
    history.push({ search: searchParams.toString() });
  }, 1000);

  const sortStudents = (param) => {
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
    if(!nameValueStudent || !emailValue || !statusValue || !courseValue) {
      return;
    }
    setNewStudent(nameValueStudent,emailValue,statusValue,courseValue);
  };

    return(
    <section className="students">
      <div className="table">
        <Form
          className="students__query query"
        >
          <Form.Row>
            <Col>
              <Form.Control
                className="query__input"
                placeholder="Search..."
                type="text"
                value={inputQue}
                onChange={handleChangeQuery}
              />
            </Col>
          </Form.Row>
        </Form>

        <div className="add">
        {isActiveForm ? (
          <div className="students__form_container">
            <button
              className="students__activation_form"
              onClick={setIsActiveForm}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill-rule="evenodd" clip-rule="evenodd">
                <path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5
              11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5
              10.5-10.5zm-6.5 10h13v1h-13v-1z"/>
              </svg>
            </button>
            <Form
              className="students__form"
              onSubmit={handlerFormSubmit}
            >

              <Form.Row>
                <Col>
                  <Form.Control
                    type="text"
                    onChange={(event) => setNameValueStudent(event.target.value)}
                    value={nameValueStudent}
                    placeholder="Write Name"
                  />
                </Col>

                <Col>
                  <Form.Control
                    type="email"
                    onChange={(event) => setEmailValue(event.target.value)}
                    placeholder="Write Email"
                    value={emailValue}
                  />
                </Col>

                <Col>
                  <Form.Control
                    onChange={(event) => setStatusValue(event.target.value)}
                    value={statusValue}
                    type="text"
                    placeholder="Write Status"
                  />
                </Col>

                <Col>
                  <Form.Control
                    onChange={(event) => setCourseValue(event.target.value)}
                    value={courseValue}
                    type="text"
                    placeholder="Write Course"
                  />
                </Col>

                <Col>
                  <Form.Control
                    type="submit"
                  />
                </Col>
              </Form.Row>


            </Form>
          </div>
        ) : (
          <button
            className="students__activation_form students__button"
            onClick={setIsActiveForm}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill-rule="evenodd" clip-rule="evenodd">
              <path d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5
            11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5
            10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"/>
            </svg>
          </button>
        )}
        </div>
        <div className="table__row table__head">
          <div
            onClick={() => sortStudents('name')}
            className="table__ceil sort"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/></svg>
            NAME
          </div>
          <div
            onClick={() => sortStudents('email')}
            className="table__ceil sort"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/></svg>
            EMAIL
          </div>
          <div
            onClick={() => sortStudents('isActive')}
            className="table__ceil sort"
          >
            STATUS
          </div>
          <div
            onClick={() => sortStudents('course')}
            className="table__ceil sort"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"/></svg>
            COURSE
          </div>
          <div
            className="table__ceil"
          >
            ACTION
          </div>
        </div>

        <StudentsList
          setChangeStudent={ setChangeStudent}
          students={sortedStudents}
        />

      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  queryStudent: getQueryStudent(state),
  students: state.students,
  isActiveForm: getIsActiveForm(state),
});

var changeStudent;
const mapDispatchToProps = ({
  setQuery: changeQueryStudent,
  setNewStudent: addNewStudent,
  setIsActiveForm: toggleForm,
});

Students.propTypes = {
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
  queryStudent: PropTypes.string,
  setQuery: PropTypes.func,
  setNewStudent: PropTypes.func,
  isActiveForm: PropTypes.bool,
  setIsActiveForm: PropTypes.func
};

Students.defaultProps = {
  queryStudent: null,
  setQuery: null,
  setNewStudent: null,
  isActiveForm: null,
  setIsActiveForm: null
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);
