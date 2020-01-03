import React from 'react';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, withRouter } from "react-router-dom";

import MainPage from './main/main_page';
import SessionFormContainer from './session/session_form_container';
import {} from '../stylesheets/reset.css';

// added props for stlying based on pathname
const App = (props) => {
	return(
		<div>
			<Switch>
				<AuthRoute exact path="/login" component={SessionFormContainer} />
				<ProtectedRoute path="/" component={MainPage} />
			</Switch>
		</div>
	)
};
//pathname withRouter change
export default withRouter(App);