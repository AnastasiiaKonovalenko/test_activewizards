import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDeleteCourses } from '../../store/selectors';
import {
  changeCourse,
  deleteCourse,
  isEditingCourse,
} from '../../store/actions';
import debounce from 'lodash/debounce';
import './course.scss'

const Course = (
  {
    id,
    name,
    code,
    id_del,
    handleDeleteCourse,
    isEditing,
    courses,
    editCourse,
    isEditingField
  }) => {

  const handleEdit = (arr, id, key) => (evt) => {
    const editValue = debounce(editCourse, 1000);
    editValue(arr, id, key, evt.target.value);
  };
  return(
    <div
      className={isEditing ? "table__row course--active" : "table__row course"}
    >
    <form
      className="course__form">

      <div
        className='table__ceil'
      >
        <input
          className={isEditing ? 'isEditing' : 'edit'}
          disabled={isEditing ? '' : 'disabled'}
          autoFocus
          id={`course-${id}`}
          type="text"
          defaultValue={name}
          onChange={handleEdit(courses, id, 'course')}
        />
      </div>

      <div className="table__ceil">
        <input
          className={isEditing ? 'isEditing' : 'edit'}
          disabled={isEditing ? '' : 'disabled'}
          autoFocus
          id={`course-${id}`}
          type="text"
          defaultValue={code}
          onChange={handleEdit(courses, id, 'course_id')}
        />
      </div>

      <div className="table__ceil">
        <button
          type="button"
          className="table__button"
          onClick={() => handleDeleteCourse(id_del)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg>
        </button>

        <button
          className="table__button"
          onClick={() => isEditingField(courses, id, !isEditing)}
        >
          {!isEditing ? (<svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24"
                              viewBox="0 0 24 24"><path d="M19.099
               11.136c-1.449 1.97-3.599 3.914-6.021
               3.597-.655.916-1.387 2.194-2.199
               3.678l-1.879.589c1.589-3.101 3.712-6.53
                5.989-9.136-.986.642-2.606 2.023-4.016
                3.479-1.271-2.656.069-5.115 2.012-6.994-.056.885.337
                1.692.631 2.107-.05-.74.036-2.062.576-3.207 1.082-.913
                 2.039-1.57 3.132-2.145-.177.647-.025 1.423.182
                 1.907.095-.67.494-1.937.955-2.462 1.364-.88
                 3.384-1.584 5.539-1.548-.238 1.328-.936
                 3.484-1.877 4.821-.761.489-1.766.775-2.566.913.663.186
                 1.407.24 2.052.192-.469.987-.946 1.891-1.667
                 3-.995.555-2.267.8-3.135.846.607.319 1.714.505 2.292.363zm-1.099
                  4.009v5.855h-16v-12h6.875c.229-.673.547-1.342.979-2h-9.854v16h20v-9.788c-.574.679-1.239 1.355-2 1.933z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z"/></svg>
          )}
        </button>

      </div>
    </form>

      {/*<div className="table__row">*/}
      {/*  <div*/}
      {/*    className="table__ceil"*/}
      {/*  >*/}
      {/*    {name}</div>*/}
      {/*  <div className="table__ceil">{code}</div>*/}
      {/*  <div className="table__ceil">*/}
      {/*    <button*/}
      {/*      className="table__button"*/}
      {/*      onClick={() => handleDeleteCourse(id)}*/}
      {/*    >*/}
      {/*      <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg>*/}
      {/*    </button>*/}
      {/*  </div>*/}
      {/*</div>*/}
      </div>
  );
};

const mapStateToProps = state => ({
  courses: getDeleteCourses(state)
});

const mapDispatchToProps = ({
  handleDeleteCourse: deleteCourse,
  editCourse: changeCourse,
  isEditingField: isEditingCourse,
});

Course.propTypes = {
  handleDeleteCourse: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Course);
