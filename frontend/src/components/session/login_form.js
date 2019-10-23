import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			errors: {}
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
	}

	// componentWillReceiveProps(nextProps) {
	// 	if (nextProps.currentUser === true) {
	// 		this.props.history.push('/koalas');
	// 	}

	// 	this.setState({ errors: nextProps.errors })
	// }

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();

		let user = {
			email: this.state.email,
			password: this.state.password
		};

		this.props.login(user);
	}

	renderErrors() {
		return (
			<ul>
				{Object.keys(this.state.errors).map((error, i) => (
					<li key={`error-${i}`}>
						{this.state.errors[error]}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (<div className='login-form-container'>
            <form className='login-form'
                onSubmit={this.handleSubmit}>
                <div className='form-title'>
                    Login
                </div>
                <input className='input-email'
                    type='text'
                    value={this.state.email}
                    onChange={this.update('email')}
                    placeholder='Email' />
                <input className='input-password'
                    type='password'
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder='Password' />
                <div className='input-column'>
                    <input className='input-submit'
                        type='submit'
                        value='Login' />
                </div>
                {this.renderErrors()}
            </form>
		</div>);
	}
}

export default withRouter(LoginForm);