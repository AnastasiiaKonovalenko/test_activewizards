import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/home/home';
import Courses from './components/courses/courses';
import Students from './components/students/students';
import { loadData} from './store/actions';
import { getStudents, getCourses } from './store/selectors';
import { Button } from 'react-bootstrap';
import './App.scss';

function App({loadStudentsAndCourses, students, courses }) {

  useEffect( () => {
    loadStudentsAndCourses();
  }, []);

  return (
    <section className="body">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/"
                className="nav__link"
              >
                <Button variant="light">Home</Button>
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="/courses"
                className="nav__link"
                courses={courses}
              >
                <Button variant="light">Courses</Button>
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="/students"
                className="nav__link"
              >
                <Button variant="light">Students</Button>
              </NavLink>
            </li>
          </ul>
        </nav>
        <main className="main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/courses">
            <Courses
              courses={courses}
            />
          </Route>

          <Route path="/students">
            <Students
              students={students}
            />
          </Route>
        </Switch>
        </main>
    </section>
  );
}

const mapStateToProps  = state => ({
  students: getStudents(state),
  courses: getCourses(state),
});
const mapDispatchToProps = ({
  loadStudentsAndCourses: loadData,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
