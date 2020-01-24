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
            className="table__button"
            onClick={() => handleDeleteCourse(id)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg>
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
