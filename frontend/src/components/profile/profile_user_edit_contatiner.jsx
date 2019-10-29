import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProfileForm from './profile-user-form';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {

  const currentProfile = ownProps.currentProfile;
  const formType = 'Update User';
  const hideForm = ownProps.hideForm;


  return { currentProfile, formType, hideForm };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: (user) => dispatch(updateUser(user))
  }
};

class ProfileEditFormContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.currentProfile;
  }

  // componentDidUpdate(prevProps) {
  //   const questionId = this.props.match.params.question_id
  //   if (prevProps.match.params.question_id != questionId) {
  //     this.props.fetchQuestion(questionId);
  //   }
  // }

  render() {
    const { currentProfile, action, formType, hideForm } = this.props;
    return (
      <ProfileForm
        currentProfile={currentProfile}
        action={action}
        formType={formType}
        hideForm={hideForm}
      />
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProfileEditFormContainer)
);