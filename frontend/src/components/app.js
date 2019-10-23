import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, withRouter } from 'react-router-dom';

import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import SessionFormContainer from './session/session_form_container';
// added props for stlying based on pahname
const App = (props) => {
	return(
	<div>
		<NavBarContainer pathname={props.location.pathname}/>
		<AuthRoute exact path="/" component={MainPage} />
		<AuthRoute exact path="/" component={SessionFormContainer} />
	</div>
	)
};
//pathname withRouter change
export default withRouter(App);