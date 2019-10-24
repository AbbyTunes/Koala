import React from 'react';
import { Link } from 'react-router-dom'
import profileIcon from '../../images/koala-profile.png'
import '../../stylesheets/profile.scss'


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.getLinks = this.getLinks.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = { active: false};
    this.profileId = this.props.match.params.user_id; 
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };


  getLinks(){
    let headerValue = "Profile";
    switch (this.props.location.pathname) {
      case `/profile/${this.profileId}/answers`:
        headerValue = "Answers";
        break;
      case `/profile/${this.profileId}/questions`:
        headerValue = "Questions";
        break;
      case `/profile/${this.profileId}/shares`:
        headerValue = "Shares";
        break;
      case `/profile/${this.profileId}/posts`:
        headerValue = "Posts";
        break;
      case `/profile/${this.profileId}/followers`:
        headerValue = "Followers";
        break;
      case `/profile/${this.profileId}/following`:
        headerValue = "Following";
        break;
      case `/profile/${this.profileId}/edits`:
        headerValue = "Edits";
        break;
      case `/profile/${this.profileId}/activity`:
        headerValue = "Activity";
        break;
      default:
        break;
    }



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
                  <div className="profile-header-credential-link">
                    <span className="credential-link">Add profile credential</span>
                  </div>
                </div>

                <div className="profile-header-description-container">
                  <div className="profile-header-description">
                    <div className="profile-description-edit-link-wrapper">
                      <span className="profile-description-edit-link">Write a description about yourself</span>
                    </div>
                    {/* to be implemented at later date */}
                    <div className="hidden-profile-header-description-edit-form">

                    </div>
                  </div>
  

                </div>
{/* to be implemented at later date */}
                <div className="profile-header-followers-container">

                </div>

              </div>
            </div>
            <div className="profile-content-left">
              <div className="feeds-list-container">
                <h3 className="feeds-title">
                  <div>Feeds</div>
                </h3>
{/* links sorta broken here, refresh causes infinite propogation of links */}
                <ul className="feeds-ul">
                  <li><Link to={`/profile/${this.profileId}`}>Profile</Link></li>
                  <li><Link to={`/profile/${this.profileId}/answers`}>Answers</Link></li>
                  <li><Link to={`/profile/${this.profileId}/questions`}>Questions</Link></li>
                  <li><Link to={`/profile/${this.profileId}/shares`}>Shares</Link></li>
                  <li><Link to={`/profile/${this.profileId}/posts`}>Posts</Link></li>
                  <li><Link to={`/profile/${this.profileId}/followers`}>Followers</Link></li>
                  <li><Link to={`/profile/${this.profileId}/following`}>Following</Link></li>
                  <li><Link to={`/profile/${this.profileId}/edits`}>Edits</Link></li>
                  <li><Link to={`/profile/${this.profileId}/activity`}>Activity</Link></li>
                </ul>
              </div>
            </div>

            <div className="profile-content-center">
              <div className="profile-content-center-header">
                <div>{headerValue}</div>
              </div>
{/* not implemented need to load associated questions etc */}
              <div className="profile-content-center-content-wrapper">

              </div>
            </div>

          </div>
{/* also doesnt have a purpose to project currently */}
          <div className="profile-content-right">

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