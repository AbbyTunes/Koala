import React from 'react';
import { AuthRoute } from "../util/route_util";
import { Route, Switch } from "react-router-dom";

import MainPage from './main/main_page';
import SessionFormContainer from './session/session_form_container'

const App = () => (
	<div>
		<Switch>
			<AuthRoute exact path="/login" component={SessionFormContainer} />
			<AuthRoute exact path="/signup" component={SessionFormContainer} />
			<Route path="/" component={MainPage} />
		</Switch>
	</div>
);

export default App;