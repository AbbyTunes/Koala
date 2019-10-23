import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { BrowserRouter, Route, Switch, Link, Redirect, withRouter } from "react-router-dom";

import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import SessionFormContainer from './session/session_form_container';

import QuestionIndexContainer from './question/question_index_container';
// added props for stlying based on pathname
const App = (props) => (
	<div>
		<NavBarContainer pathname={props.location.pathname}/>
		<Switch>
			<Route exact path="/questions" component={QuestionIndexContainer} />

			<AuthRoute exact path="/" component={SessionFormContainer} />
		</Switch>
		
	</div>
	);
//pathname withRouter change
export default withRouter(App);