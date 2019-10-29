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
            errors: {},
            form: true
		};

		this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
        this.toggleForm = this.toggleForm.bind(this);
        this.handleDemoOne = this.handleDemoOne.bind(this);
        this.handleDemoTwo = this.handleDemoTwo.bind(this);
	}

	// componentWillReceiveProps(nextProps) {
	// 	if (nextProps.signedIn === true) {
	// 		this.props.history.push('/login');
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
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			password: this.state.password
		};

        this.props.signup(user)
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
    
    toggleForm() {
        if (this.state.form) {
            this.setState({'form': false});
        } else {
            this.setState({'form': true});
        }
    }

    handleDemoOne() {
        this.props.demoLogin1();
    }

    handleDemoTwo() {
        this.props.demoLogin2();
    }

	render() {
		return (<div className='signup-form-container'>
            <div className='demo-btn-container'
                hidden={!this.state.form}>
                <button className='demo-btn one'
                    onClick={this.handleDemoOne}>
                    Log On Demo User 1
                </button>
                <button className='demo-btn two'
                    onClick={this.handleDemoTwo}>
                    Log On Demo User 2
                </button>
                <div className='sign-up-txt'
                    onClick={this.toggleForm}>
                    Sign Up With Email
                </div>
            </div>
            <form className='signup-form'
                hidden={this.state.form}>
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
                    <div className='cancel'
                        onClick={this.toggleForm}>
                        Cancel
                    </div>
                    <input className='input-submit'
                        onClick={this.handleSubmit}
                        type='button'
                        value='Sign Up' />
                </div>
                {this.renderErrors()}
            </form>
        </div>);
	}
}

export default withRouter(SignupForm);