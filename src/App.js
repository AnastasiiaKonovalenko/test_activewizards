import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/home/home';
import Courses from './components/courses/courses'


function App() {

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

              >
                Courses
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
            />
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default App;
