import React from 'react';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import sessionFormStylesheet from '../../stylesheets/session_form.scss';

const SessionFormContainer = () => {
    return (<div className='session-form-container'>
        <div className='network-logo'></div>
        <div className='network-logo-tag'>
            A place to share koalas and better understand the koala
        </div>
        <div className='form-area-container'>
            <SignupFormContainer />
            <div className='form-divider'></div>
            <LoginFormContainer />
        </div>
    </div>);
}

export default SessionFormContainer;