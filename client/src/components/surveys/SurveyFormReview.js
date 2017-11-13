import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = ({ title, subject, body, emails, onCancel }) => {
  return (
    <div>
      <h2>Please confirm your entries</h2>
      <div>
        <h5>Title</h5>
        <p>{title}</p>
      </div>
      <div>
        <h5>Subject</h5>
        <p>{subject}</p>
      </div>
      <div>
        <h5>Body</h5>
        <p>{body}</p>
      </div>
      <div>
        <h5>Recipients</h5>
        <p>{emails}</p>
      </div>

      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return state.form.surveyForm.values;
}
export default connect(mapStateToProps, null)(SurveyFormReview);
