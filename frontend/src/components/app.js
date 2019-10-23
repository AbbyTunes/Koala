import React from 'react';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route, Switch, Redirect } from "react-router-dom";

import MainPage from './main/main_page';
import SessionFormContainer from './session/session_form_container'

const App = () => (
	<div>
		<Switch>
			<AuthRoute exact path="/login" component={SessionFormContainer} />
			<AuthRoute exact path="/signup" component={SessionFormContainer} />
			<ProtectedRoute path="/" component={MainPage} />
			<Route exact path='/*' render={() => <Redirect to={{ pathname: "/" }} />} />
		</Switch>
	</div>
);

export default App;