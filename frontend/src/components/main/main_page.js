import React from "react";
import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import MainPageStylesheet from '../../stylesheets/main_page.scss';

import NavBarContainer from "../nav/navbar_container";
// import ProfileShowContainer from "../profile/profile_container"
import QuestionIndexContainer from "../question/question_index_container";
import QuestionShowContainer from "../question/question_show_container";

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
						{/* <Route exact path="/" component={AnswerIndexContainer} /> */}
						{/* <Route exact path="/profile/:user_id" component={ProfileShowContainer} /> */}
						<Route exact path='/*' render={() => <Redirect to={{ pathname: "/" }} />} />
						
					</Switch>
				</div>

				
			</div>
		);
	}
}

export default MainPage;