import React, { useState } from 'react';
import './loginPage.scss';
import LoginForm from '../loginForm/loginFrom';

function LoginPage(props) {
    const [formInputValues, setFormInputValues] = useState({
        email: '',
        password: '',
    })

    const handleFormInputChanges = (e) => {
        setFormInputValues({
            ...formInputValues,
            [e.target.id]: e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        props.login(formInputValues.email, formInputValues.password)
    }

	return (
		<div>
			is user logged in? {props.user ? 'True' : 'false'}
            <LoginForm 
                submitForm={submitForm}
                handleFormInputChanges={handleFormInputChanges}
                inputValue={formInputValues}
                />
		</div>
	);
}

export default LoginPage;