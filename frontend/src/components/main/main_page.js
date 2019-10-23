import React from "react";
import { AuthRoute, ProtectedRoute } from "../../util/route_util";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import NavBarContainer from "../nav/navbar_container";
import QuestionIndexContainer from "../question/question_index_container";
import QuestionShowContainer from "../question/question_show_container";

class MainPage extends React.Component {

	render() {
		return (
			<div className='main-page-container'>
				<NavBarContainer />
				<div className='main-page-content'>
					<Switch>
						<Route exact path="/questions" component={QuestionIndexContainer} />
						<Route exact path="/questions/:question_id" component={QuestionShowContainer} />
						{/* <Route exact path="/" component={AnswerIndexContainer} /> */}
						<Route exact path='/*' render={() => <Redirect to={{ pathname: "/" }} />} />
						
					</Switch>
				</div>

				
			</div>
		);
	}
}

export default MainPage;