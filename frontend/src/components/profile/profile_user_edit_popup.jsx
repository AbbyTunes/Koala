import React from "react";
import ProfileEditFormContainer from "./profile_user_edit_contatiner";
import {} from "../../stylesheets/question_pop_up.scss";

class ProfilePopUp extends React.Component {

  constructor(props) {
    super(props)
    this.state = { showForm: false }
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  showForm() {
    this.setState({ showForm: true })
  }

  hideForm() {
    this.setState({ showForm: false })
  }

  render() {
    return (
      // <div className="question-form">
      <div>
        <div className="edit-link" onClick={this.showForm}>Edit Username</div>
        {this.state.showForm ? (
          <div className="full-screen">
            <div className="modal" onClick={this.hideForm}></div>
            <ProfileEditFormContainer hideForm={this.hideForm} currentProfile={this.props.currentProfile}/>
          </div>
        ) : (null)
        }
      </div>
    )
  }
}

export default ProfilePopUp;