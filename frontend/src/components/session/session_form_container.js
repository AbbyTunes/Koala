import React from 'react';
import SignupForm from './signup_form';
import LoginForm from './login_form';
import {} from '../../stylesheets/session_form.scss';

const SessionFormContainer = () => {
  return (<div className='landing-splash-container-container'>
    <div className='landing-splash-container'>
      <div className='session-form-container'>
        <div className='network-logo'></div>
        <div className='network-logo-tag'>
          A place to share koalas and better understand the koala
        </div>
        <div className='form-area-container'>
          <SignupForm />
          <div className='form-divider'></div>
          <LoginForm />
        </div>
      </div>
    </div>
  </div>);
}

export default SessionFormContainer;