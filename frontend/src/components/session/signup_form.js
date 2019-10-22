import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			errors: {}
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearedErrors = false;
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.signedIn === true) {
			this.props.history.push('/login');
		}

		this.setState({ errors: nextProps.errors })
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		let user = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			password: this.state.password
		};

		this.props.signup(user, this.props.history);
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
		return (<div className='signup-form-container'>
            <form className='signup-form'
                onSubmit={this.handleSubmit}>
                <div className='form-title'>
                    Sign Up
                </div>
                <div className='input-name-container'>
                    <label className='input-label'>FIRST NAME
                        <input className='input-firstname'
                            type='text'
                            value={this.state.firstName}
                            onChange={this.update('firstName')} />
                    </label>
                    <label className='input-label'>LAST NAME
                        <input className='input-lastname'
                            type='text'
                            value={this.state.lastName}
                            onChange={this.update('lastName')} />
                    </label>
                </div>
                <label className='input-label'>EMAIL
                    <input className='input-email'
                        type='text'
                        value={this.state.email}
                        onChange={this.update('email')} />
                </label>
                <label className='input-label'>PASSWORD
                    <input className='input-password'
                        type='password'
                        value={this.state.password}
                        onChange={this.update('password')} />
                </label>
                <div className='input-column'>
                    <a className='cancel'
                        href='#'>
                        Cancel
                    </a>
                    <input className='input-submit'
                        type='submit'
                        value='Sign Up' />
                </div>
                {this.renderErrors()}
            </form>
        </div>);
	}
}

export default withRouter(SignupForm);