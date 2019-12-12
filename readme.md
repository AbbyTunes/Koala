# Koala
# [Koala Demo](https://koaalaa.herokuapp.com)
<!-- ![Koala Logo](https://github.com/AbbyTunes/Koala/blob/master/frontend/src/images/Koala-logo-final.png) -->


![Check out our home page!](https://imgur.com/kSK37Ls)

## Group Members and Contributions

Abby [Linkedin](https://www.linkedin.com/in/abby-jun-xu/) [Github](https://www.linkedin.com/in/abby-jun-xu/)

Raymond Leung [Linkedin](https://www.linkedin.com/in/raymond-leung-b0874b198/) [Github](https://github.com/ray-leun1)

Ryan Woods [Linkedin](https://www.linkedin.com/in/ryan-woods-530679b4/)  [Github](https://github.com/rwoods1227)


## Technologies
 * Backend: MongoDB, Express, React, and Node.js (MERN)
 * Frontend: JavaScript, React, Redux

## Background and Overview
Koala is your ultimate Q&A site about Koalas! 
Inspired by Quora, users can post questions and answers, as well as upvote and downvote answers to let other koala-enthusiasts know how helpful and relevant the provided answers are to the koala mission.

<!-- Koala is an app for asking questions and posting answers about Koalas, based on Quora. Users can upvote and downvote answers to let other koala-enthusiasts know how helpful and relevant the provided answers are to the koala mission.

Koalas are undeniably one of the most adorable creatures this world has to offer, and their amount of fans grows day by day. In order to satiate the ravenous hunger for knowledge on koalas, we present Koala.com!  -->

## Functionality and MVP
- [ ] User Authentication
- [ ] User Profile
- [ ] Questions
- [ ] Answers
- [ ] Upvotes and Downvotes

## Design

User profile
![alt text](https://imgur.com/xrUVXJA)

The question board
![alt text](https://imgur.com/kSK37Ls)

Question detail and Answers
![alt text](https://imgur.com/kSK37Ls)

Search functionality
![alt text](https://imgur.com/OoFia2G)


## Features and Technical Challenges

### Integration of User, Question, Answer associations
* Highly customized backend routes and configurations
* All answers tied to parent question
* User Profile shows answers and questions specific to User on switchable feed

```javascript 
//profile.jsx
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
  }
```

### Upvotes and Downvotes
* Upvotes and downvotes for answers
* Require individual answers to store information regarding voters
* Vote persistence for each individual user updated across different pages
* Answer items with a large amount of nested functionality

```javascript
//question_answer_index_item.jsx
  this.toggleUpvote = this.toggleUpvote.bind(this);
  this.toggleDownvote = this.toggleDownvote.bind(this);
  this.downvoteHover = this.downvoteHover.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
  this.toggleMore = this.toggleMore.bind(this);
  this.moreHover = this.moreHover.bind(this);
```

### Create and Edit Forms
* Highly interactive UI for create and edit functionality
* Responsive interaction through modals, dropdowns, and hideable forms

```javascript
//question_edit_pop_up.jsx
  <div>
    <li onClick={this.showForm}>
      <div className="question-left-icon"></div>
    </li> {
      this.state.showForm ? (
        <div className="full-screen">
          <div className="modal" onClick={this.hideForm}></div>
          <EditQuestionContainer hideForm={this.hideForm} />
        </div>
      ) : (null)
    }
  </div>
```

### Random Home Page
* Loads a random question with associated answers on home page
* Randomizes on each return to the home page

```javascript
//main_page.js
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      fetchQuestions().then(questions => {
        let rand = questions.data[Math.floor(Math.random() * questions.data.length)];
        this.setState({ rand: rand });
      })
    }
  }
```


### Upcoming Features
* Search
* following & followed
* Topics
