import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import SessionFormContainer from './session/session_form_container';
import QuestionIndexContainer from './question/question_index_container';

const App = () => (
	<div>
		<NavBarContainer />
		<Switch>
			<Route exact path="/questions" component={QuestionIndexContainer} />

			<AuthRoute exact path="/" component={SessionFormContainer} />
		</Switch>
		
	</div>
);

export default App;