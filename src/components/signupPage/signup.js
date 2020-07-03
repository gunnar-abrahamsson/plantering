import React, { useState } from 'react';
import './loginPage.scss';
import LoginForm from '../loginForm/loginFrom';
import firebase from '../../auth/firebase';

function SignupPage(props) {
    const [formInputValues, setFormInputValues] = useState({
        email: '',
        password: '',
    })

    const login = (email, password) => {
		//send login data to firebase
        firebase.auth().createUserWithEmailAndPassword(email, password);
    }
    
    const handleFormInputChanges = (e) => {
        setFormInputValues({
            ...formInputValues,
            [e.target.id]: e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        login(formInputValues.email, formInputValues.password)
    }

	return (
		<div>
            <LoginForm 
                submitForm={submitForm}
                handleFormInputChanges={handleFormInputChanges}
                inputValue={formInputValues}
                />
		</div>
	);
}

export default SignupPage;