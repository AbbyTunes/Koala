import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { signup, login } from '../../actions/session_actions';

export default () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [form, setForm] = useState(true);

  const errors = useSelector(state => state.errors.session);

  const demoUser1 = {
    email: 'demo@gmail.com',
    password: '123456'
  };

  const demoUser2 = {
    email: 'bagel@gmail.com',
    password: '123456'
  };

	const handleSubmit = e => {
		e.preventDefault();
		let user = { firstName, lastName, email, password };
    dispatch(signup(user));
	}

	const renderErrors = () => {
    if (errors.signup) {
      return (<ul className='errors'>
        {Object.keys(errors.signup).map((error, i) => (
          <li key={`error-${i}`}>
            {errors.signup[error]}
          </li>
        ))}
      </ul>);
    }
  }
    
  const toggleForm = () => form ? setForm(false) : setForm(true);

  return (<div className='signup-form-container'>
    <div className='demo-btn-container'
      hidden={!form}>
      <button className='demo-btn one'
        onClick={e => dispatch(login(demoUser1))}>
        Log On Demo User 1
      </button>
      <button className='demo-btn two'
        onClick={e => dispatch(login(demoUser2))}>
        Log On Demo User 2
      </button>
      <div className='sign-up-txt'
        onClick={toggleForm}>
        Sign Up With Email
      </div>
    </div>
    <form className='signup-form'
      hidden={form}>
      <div className='form-title'>
        Sign Up
      </div>
      <div className='input-name-container'>
        <label className='input-label'>FIRST NAME
          <input className='input-firstname'
            type='text'
            value={firstName}
            onChange={e => setFirstName(e.target.value)} />
        </label>
        <label className='input-label'>LAST NAME
          <input className='input-lastname'
            type='text'
            value={lastName}
            onChange={e => setLastName(e.target.value)} />
        </label>
      </div>
      <label className='input-label'>EMAIL
        <input className='input-email'
          type='text'
          value={email}
          onChange={e => setEmail(e.target.value)} />
      </label>
      <label className='input-label'>PASSWORD
        <input className='input-password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)} />
      </label>
      <div className='input-column'>
        <div className='cancel'
          onClick={toggleForm}>
          Cancel
        </div>
        <input className='input-submit'
          onClick={handleSubmit}
          type='button'
          value='Sign Up' />
      </div>
      {renderErrors()}
    </form>
  </div>);
}