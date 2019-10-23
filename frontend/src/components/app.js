import React from 'react';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch, Redirect } from "react-router-dom";

import MainPage from './main/main_page';
import SessionFormContainer from './session/session_form_container'

// added props for stlying based on pathname
const App = (props) => (
	<div>
		<Switch>
			<AuthRoute exact path="/login" component={SessionFormContainer} />
			<AuthRoute exact path="/signup" component={SessionFormContainer} />
			<ProtectedRoute path="/" component={MainPage} />
			<Route exact path='/*' render={() => <Redirect to={{ pathname: "/" }} />} />
		</Switch>
	</div>
	);
//pathname withRouter change
export default withRouter(App);