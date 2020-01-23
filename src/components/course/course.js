import React from 'react';
import { connect } from 'react-redux';
import { getDeleteCourses } from '../../store/selectors';
import { deleteCourse } from '../../store/actions';

const Course = ({ id, name, code, handleDeleteCourse }) => {
  return(
      <div className="table__row">
        <div
          className="table__ceil"
        >
          {name}</div>
        <div className="table__ceil">{code}</div>
        <div className="table__ceil">
          <button
            onClick={() => handleDeleteCourse(id)}
          >
            Delete
          </button>
        </div>
      </div>
  );
};

const mapStateToProps = state => ({
  courses: getDeleteCourses(state)
});

const mapDispatchToProps = ({
  handleDeleteCourse: deleteCourse
});

export default connect(mapStateToProps, mapDispatchToProps)(Course);
