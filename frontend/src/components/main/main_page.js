import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import {} from '../../stylesheets/main_page.scss';

import NavBarContainer from "../nav/navbar_container";
import ProfileShowContainer from "../profile/profile_container"
import QuestionIndexContainer from "../question/question_index_container";
import QuestionShowContainer from "../question/question_show_container";
import AnswerIndexContainer from '../answer/user_answer_index_container';
import HomeContainer from '../question/home_container';
import Credit from '../nav/credit.jsx';

class MainPage extends React.Component {
// props to pass down pathname
	constructor(props) {
		super(props);
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
						<Route exact path='/' render={() => <HomeContainer />} />
						<Route exact path='/*' render={() => <Redirect to={{ pathname: "/" }} />} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default withRouter(MainPage);