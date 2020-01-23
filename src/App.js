import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/home/home';
import Courses from './components/courses/courses';
import Students from './components/students/students';
import { loadData} from './store/actions';
import { getStudents, getCourses } from './store/selectors';
import './App.scss';

function App({loadStudentsAndCourses, students, courses }) {

  useEffect( () => {
    loadStudentsAndCourses();
  }, []);

  return (
    <section>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className="nav__link"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/courses"
                className="nav__link"
                courses={courses}
              >
                Courses
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/students"
                className="nav__link"
              >
                Students
              </NavLink>
            </li>
          </ul>
        </nav>

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
      </div>
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
