import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { fetchQuestions } from '../../util/question_api_util';
import MainPageStylesheet from '../../stylesheets/main_page.scss';
// import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import NavBarContainer from "../nav/navbar_container";
import ProfileShowContainer from "../profile/profile_container"
import QuestionIndexContainer from "../question/question_index_container";
import QuestionShowContainer from "../question/question_show_container";
import AnswerIndexContainer from '../answer/user_answer_index_container';
import QuestionRandContainer from '../question/question_rand_container';
import Credit from '../nav/credit';

class MainPage extends React.Component {
// props to pass down pathname
	constructor(props) {
		super(props);

		this.state = {
			rand: null
		}
	}

	componentDidMount() {
		fetchQuestions().then(questions => {
			let rand = questions.data[Math.floor(Math.random() * questions.data.length)];
			this.setState({ rand: rand });
		})
	}

	componentDidUpdate(prevProps) {
		if (prevProps.location.pathname !== this.props.location.pathname) {
			fetchQuestions().then(questions => {
				let rand = questions.data[Math.floor(Math.random() * questions.data.length)];
				this.setState({ rand: rand });
			})
		}
	}

	render() {
		return (
			<div className="main-page-container">
				<NavBarContainer pathname={this.props.location.pathname}/>
				<div className="main-page-content">
					<Switch>
						<Route exact path="/questions" component={QuestionIndexContainer} />
						<Route exact path="/questions/:question_id" component={QuestionShowContainer} />
						<Route exact path='/users/:user_id/answers' component={AnswerIndexContainer} />
						<Route path="/profile/:user_id" component={ProfileShowContainer} />
						<Route exact path="/credit" component={Credit} />
						<Route exact path='/*' render={() => <Redirect to={{ pathname: "/" }} />} />
					</Switch>
					{this.state.rand ? <Route exact path='/' render={() => <QuestionRandContainer rand={this.state.rand} />} /> : ''}
				</div>

				
			</div>
		);
	}
}

export default withRouter(MainPage);