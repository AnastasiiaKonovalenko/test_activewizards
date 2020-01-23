import React from 'react';
import { connect } from 'react-redux';
import { deleteStudent } from '../../store/actions';
import { getDeleteStudents } from '../../store/selectors';

const Student = ({ id, name, email, status, course, deleteStu }) => {

  return(
    <div className="table__row">
      <div
        className="table__ceil"
      >
        {name}
      </div>
      <div
        className="table__ceil"
      >
        {email}
      </div>
      <div className="table__ceil">{status ? 'Active' : 'Inactive'}</div>
      <div className="table__ceil">{course}</div>
      <div className="table__ceil">
        <button
          onClick={()=>{deleteStu(id)}}
        >
          Delete
        </button>
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  students: getDeleteStudents(state),
});

const mapDispatchToProps = ({
  deleteStu: deleteStudent,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Student);
