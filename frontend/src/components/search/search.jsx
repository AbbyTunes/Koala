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
      if (question.title.startsWith(this.state.query)) {
        questionTitles.push(question.title);
      }
    });
    this.props.users.map((user) => {
      let fullname = user.firstName + user.lastName;
      if (fullname.startsWith(this.state.query)){
        userNames.push(fullname);
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
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search