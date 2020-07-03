import React from 'react';
import './authForm.scss';

function LoginForm(props) {
	return (
		<form onSubmit={props.submitForm}>
            <input onChange={props.handleFormInputChanges} value={props.inputValue.email} type="email" id="email" placeholder="Email" required />
            <input onChange={props.handleFormInputChanges} value={props.inputValue.password} type="password" id="password" placeholder="Password" required />
            <button type="submit">{props.formType}</button>
        </form>
	);
}

export default LoginForm;