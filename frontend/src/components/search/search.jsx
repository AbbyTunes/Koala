import React, { Component } from 'react'
import Suggestions from './suggestions'
import FocusWithin from "react-focus-within"; 

class Search extends Component {
 
  state = {
    query: '',
    results: [],
    activeSearch: false
  }



  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchQuestions();
  }

  toggleClassNameTrue = () => {
    console.log(this)
    this.setState({ activeSearch: true })
  }

  toggleClassNameFalse = () => {
    this.setState({ activeSearch: false })
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
    console.log(this)
    this.setState({
      results: data
    })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 1 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
        this.setState({
          results: []
        })
      }
    })
  }

 
  render() {
    return (
      <FocusWithin>
        {({ focusProps, isFocused }) => (
          <div
            {...focusProps}
            className="header-nav-item"
            id={isFocused ? "focused" : "unfocused"}
          >
            <input
              placeholder="Search for..."
              ref={input => (this.search = input)}
              onChange={this.handleInputChange}
              className="navbar-search-input"
            />
            <div
              // onClick={this.toggleClassNameFalse}
              className="nav-profile-dropdown"
              // className={
              //   this.state.activeSearch ? " nav-profile-dropdown" : "hidden"
              // }
            >
              <div className="nav-profile-dropdown-contents">
                <div className="nav-profile-dropdown-overflow">
                  <div className="nav-profile-dropdown-inner-style">
                    <Suggestions results={this.state.results} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </FocusWithin>
    );
  }
}
//onClick={this.toggleClassNameFalse}
export default Search