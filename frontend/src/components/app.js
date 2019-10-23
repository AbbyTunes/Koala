import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';

import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import SessionFormContainer from './session/session_form_container';

const App = () => (
	<div>
		<NavBarContainer />
		<AuthRoute exact path="/" component={MainPage} />
		<AuthRoute exact path="/" component={SessionFormContainer} />
	</div>
);

export default App;