import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../actions/session_actions';

export default () => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const errors = useSelector(state => state.errors.session);

	const handleSubmit = e => {
		e.preventDefault();
		let user = { email, password };
		dispatch(login(user));
	}

	const renderErrors = () => {
		if (errors.login) {
			return (<ul className='errors'>
				{Object.keys(errors.login).map((error, i) => (
					<li key={`error-${i}`}>
						{errors.login[error]}
					</li>
				))}
			</ul>);
		}
	}

	return (<div className='login-form-container'>
		<form className='login-form'
			onSubmit={handleSubmit}>
			<div className='form-title'>
				Login
			</div>
			<input className='input-email'
				type='text'
				value={email}
				onChange={e => setEmail(e.target.value)}
				placeholder='Email' />
			<input className='input-password'
				type='password'
				value={password}
				onChange={e => setPassword(e.target.value)}
				placeholder='Password' />
			<div className='input-column'>
				<input className='input-submit'
					type='submit'
					value='Login' />
			</div>
			{renderErrors()}
		</form>
	</div>);
}