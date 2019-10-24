import React from 'react';
import { Link } from 'react-router-dom'
import profileIcon from '../../images/koala-profile.png'
import '../../stylesheets/profile.scss'


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.getLinks = this.getLinks.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = { active: false };
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };


  getLinks(){
    return (
      <div className="profile-page-container">
        <div className="profile-page-grid">
          <div className="profile-wrapper">
            <div className="profile-header">
              <div className="profile-header-photo-container">
                <img className="profile-header-profile-photo" src={profileIcon} alt="Profile Photo" />
              </div>
{/* this modal and edit is not used/implemented yet */}
              <div className="modal-edit-actions">

              </div>
              <div className="profile-header-content">
                <div className="profile-header-content-name-and-credential">
                  <div className="profile-header-content-name-edit-wrapper">
                    <h1 className="profile-name">
                      <span>{this.props.currentUser.firstName} {this.props.currentUser.lastName}</span>
                    </h1>
                    <span className="edit-link">Edit</span>
{/* not implemented, come back as bonus */}
                    <div className="hidden-edit-form-for-profile">

                    </div>

                  </div>
{/* not implemented, come back as bonus */}
                  <div className="hidden-modal-form-for-profile">

                  </div>

                </div>
                <div>

                </div>
                <div>

                </div>

              </div>
            </div>
            <div className="profile-content-left">

            </div>

            <div className="profile-content-center">

            </div>

          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.getLinks()}
      </div>
    );
  }

}

export default Profile;