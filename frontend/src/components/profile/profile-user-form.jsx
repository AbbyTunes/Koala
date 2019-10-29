import React from 'react';
import { withRouter } from 'react-router-dom';

class ProfileForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.currentProfile;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return (e) => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.action(this.state);
    this.props.hideForm()
    if (this.props.formType === 'Add Question') {
      this.props.history.push("/questions");
    }
  }

  render() {
    if (!this.props.currentProfile) {
      return null;
    } else if (this.props.currentProfile.id === "5dae2940ff190b3758970361" || this.props.currentProfile.id === "5dade879bef5743ce5ca1bb8"){
      return (<div className="question-pop-up">

        <div className="question-form-1">
          <div className="form-1-left">CANNOT EDIT DEMO USER</div>
          <div className="form-1-right" onClick={this.props.hideForm} >
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="small_close" className="icon_svg-stroke" fill="none" fillRule="evenodd" strokeLinecap="round" stroke="#666666" strokeWidth="1.5">
                <path d="M12,6 L12,18" transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "></path>
                <path d="M18,12 L6,12" transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
          );
    }
    return (
      <div className="question-pop-up">

        <div className="question-form-1">
          <div className="form-1-left">{this.props.formType}</div>
          <div className="form-1-right" onClick={this.props.hideForm} >
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="small_close" className="icon_svg-stroke" fill="none" fillRule="evenodd" strokeLinecap="round" stroke="#666666" strokeWidth="1.5">
                <path d="M12,6 L12,18" transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "></path>
                <path d="M18,12 L6,12" transform="translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) "></path>
              </g>
            </svg>
          </div>
        </div>

        <div className="question-form-2" id="update-profile-user">
          <form onSubmit={this.handleSubmit} >

            <input className="form-2-title"
              type="firstName"
              placeholder="firstName"
              value={this.state.firstName}
              onChange={this.handleInput('firstName')} />
            <input className="form-2-title"
              type="lastName"
              placeholder="lastName"
              value={this.state.lastName}
              onChange={this.handleInput('lastName')} />

            <div className="form-3-cancel" onClick={this.props.hideForm} >cancel</div>
            <input className="form-3-submit" type="submit" value={this.props.formType} />

          </form>
        </div>

      </div>
    );
  }
}

export default withRouter(ProfileForm);