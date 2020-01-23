import React, { useState } from 'react';
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

const Students = ({students, queryStudent, setQuery, setNewStudent, isActiveForm, setIsActiveForm }) => {
  const [inputQuery, setInputQuery] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [statusValue, setStatusValue] = useState('');
  const [courseValue, setCourseValue] = useState('');

  const location = useLocation();
  const history = useHistory();

  const debouncedSetQuery = debounce(setQuery, 1000);

  const handleChangeQuery = (evt) => {
    debouncedSetQuery(evt.target.value);
    setInputQuery(evt.target.value);
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
    if(!nameValue || !emailValue || !statusValue || !courseValue) {
      return;
    }
    setNewStudent(nameValue,emailValue,statusValue,courseValue);
  };

    return(
    <section>

      {isActiveForm ? (
        <>
          <button
            onClick={setIsActiveForm}
          >
            formAdd
          </button>
        <form
          onSubmit={handlerFormSubmit}
        >
          <label>
            Name
            <input
              type="text"
              onChange={(event) => setNameValue(event.target.value)}
              value={nameValue}
              placeholder="Write here..."
            />
          </label>

          <label>
            Email
            <input
              type="email"
              onChange={(event) => setEmailValue(event.target.value)}
              placeholder="Write here..."
              value={emailValue}
            />
          </label>

          <label>
            Status
            <input
              onChange={(event) => setStatusValue(event.target.value)}
              value={statusValue}
              type="text"
              placeholder="Write here..."
            />
          </label>

          <label>
            Course
            <input
              onChange={(event) => setCourseValue(event.target.value)}
              value={courseValue}
              type="text"
              placeholder="Write here..."
            />
          </label>
          <input
            type="submit"
          />
        </form>
        </>
      ) : (
        <button
          onClick={setIsActiveForm}
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
            onClick={() => sortStudents('name')}
            className="table__ceil"
          >
            Name
          </div>
          <div
            onClick={() => sortStudents('email')}
            className="table__ceil"
          >
            Email
          </div>
          <div
            onClick={() => sortStudents('isActive')}
            className="table__ceil"
          >
            Status
          </div>
          <div
            onClick={() => sortStudents('course')}
            className="table__ceil"
          >
            Course
          </div>
          <div
            className="table__ceil"
          >
            Action
          </div>
        </div>

        <StudentsList
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

const mapDispatchToProps = ({
  setQuery: changeQueryStudent,
  setNewStudent: addNewStudent,
  setIsActiveForm: toggleForm,
});

export default connect(mapStateToProps, mapDispatchToProps)(Students);
