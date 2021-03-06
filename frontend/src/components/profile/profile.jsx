import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../../images/koala-profile.png';
// import koalaAd1 from '../../images/koala-AD-1.jpeg';
// import koalaAd2 from '../../images/Koala-AD-2.jpeg';
import '../../stylesheets/profile.scss';
import '../../stylesheets/profile_questions_index.scss';
import '../../stylesheets/profile_answers_index.scss';
import ProfileQuestionsContainer from "../question/profile_questions_container";
import ProfileAnswersContainer from "../question/answers/profile_answers_index_container";
import ProfilePopUp from './profile_user_edit_popup'
//import UserAnswersContainer from "../answer/user_answer_index_container";


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.getLinks = this.getLinks.bind(this);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = { active: false};
    this.profileId = this.props.match.params.user_id; 



    this.state = {
      currentProfile: {}
    }
    this.props.fetchUser(this.profileId)
      .then(user => this.setState({ currentProfile: user.user }));
  }

  toggleClass() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  componentDidMount() {
    this.props.fetchUser(this.profileId)
      .then(user => this.setState({ currentProfile: user.user }));
  }


  getLinks(){
    let headerValue = "Profile";
    let feedContent;
    switch (this.props.location.pathname) {
      case `/profile/${this.profileId}/answers`:
        headerValue = "Answers";
        feedContent = <ProfileAnswersContainer  profileId={this.profileId} />
        break;
      case `/profile/${this.profileId}/questions`:
        headerValue = "Questions";
        feedContent = <ProfileQuestionsContainer profileId={this.profileId} />;
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
        feedContent = <ProfileAnswersContainer  profileId={this.profileId} />
        break;
    }

    let ad;
    let randomNum = Math.random();
    if (randomNum > 0.5) {
      ad = 'profile-side-AD-A';
    }
    else{
      ad = 'profile-side-AD-B';
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
                      <span>{this.state.currentProfile.firstName} {this.state.currentProfile.lastName}</span>
                    </h1>
                    <ProfilePopUp currentProfile={this.state.currentProfile}/>
                    <div className="hidden-edit-form-for-profile">

                    </div>

                  </div>
{/* not implemented, come back as bonus */}
                  <div className="profile-header-credential-link">
                    <span className="credential-link"></span></div>
                </div>

                <div className="profile-header-description-container">
                  <div className="profile-header-description">
                    <div className="profile-description-edit-link-wrapper">
                      <span className="profile-description-edit-link"></span>

                    </div>
                    {/* to be implemented at later date */}
                    <div className="hidden-profile-header-description-edit-form"></div>
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
                  {/* <li><Link to={`/profile/${this.profileId}/shares`}>Shares</Link></li>
                  <li><Link to={`/profile/${this.profileId}/posts`}>Posts</Link></li>
                  <li><Link to={`/profile/${this.profileId}/followers`}>Followers</Link></li>
                  <li><Link to={`/profile/${this.profileId}/following`}>Following</Link></li>
                  <li><Link to={`/profile/${this.profileId}/edits`}>Edits</Link></li>
                  <li><Link to={`/profile/${this.profileId}/activity`}>Activity</Link></li> */}
                </ul>
              </div>
            </div>

            <div className="profile-content-center">
              <div className="profile-content-center-header">
                <div>{headerValue}</div>
              </div>
{/* not implemented need to load associated questions etc */}
              <div className="profile-content-center-content-wrapper">
                <div className="combined-profile-feed">
                  <div className="current-feed-wrapper">
{/* I think current feed item will just turn into the the styling of the question show */}
{/* <div className="current-feed-item"></div> */}
                    {feedContent}
                  </div>
                </div>
              </div>
            </div>

          </div>
{/* also doesnt have a purpose to project currently */}
          <div className="profile-content-right">
            <a id="ad-profile" href="https://www.savethekoala.com/">
              {/* <img className="profile-side-AD" src={ad} alt="Ad" /> */}
              <div className={ad}></div>
            </a>
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