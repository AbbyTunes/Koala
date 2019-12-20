import React, { Component } from 'react'
import Suggestions from './suggestions'

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchQuestions();
  }

  getInfo(){
    let questionTitles = [];
    let userNames = [];
    this.props.questions.map((question)=>{
      if (question.title.toLowerCase().includes(this.state.query.toLowerCase())) {
        let titleAndId = [question.title, question._id, "/questions"]
        questionTitles.push(titleAndId);
      }
    });
    this.props.users.map((user) => {
      let fullname = user.firstName + user.lastName;
      if (fullname.toLowerCase().includes(this.state.query.toLowerCase())){
        let nameAndId = [fullname, user.id, "/profile"];
        userNames.push(nameAndId);
      }
    });
    let data = questionTitles.concat(userNames);
    console.log(data)
    this.setState({
      results: data
    })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

 // suggestions has shitty css that breaks navbar
  render() {
    return (
      <div className="header-nav-item">
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
          className="navbar-search-input"
        />
        <div className={this.props.className}>
          <div className="nav-profile-dropdown-contents">
            <div className="nav-profile-dropdown-overflow">
              <div className="nav-profile-dropdown-inner-style">
                <Suggestions results={this.state.results} />
              </div>
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

export default Search