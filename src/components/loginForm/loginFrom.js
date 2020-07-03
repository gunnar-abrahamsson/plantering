import React from 'react';
import './loginForm.scss';

function LoginForm(props) {
	return (
		<form onSubmit={props.submitForm}>
            <input onChange={props.handleFormInputChanges} value={props.inputValue.email} type="email" id="email" placeholder="Email" required />
            <input onChange={props.handleFormInputChanges} value={props.inputValue.password} type="password" id="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
	);
}

export default LoginForm;