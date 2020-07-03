import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import AuthForm from '../authForm/authFrom';
import firebase from '../../auth/firebase';

function SignupPage({ history }) {
    const [formInputValues, setFormInputValues] = useState({
        email: '',
        password: '',
    });

    const createAccount = async (email, password) => {
        //send login data to firebase
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            history.push('/');
        } catch (err) {
            console.error(err)
        }
    }
    
    const handleFormInputChanges = (e) => {
        setFormInputValues({
            ...formInputValues,
            [e.target.id]: e.target.value
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        createAccount(formInputValues.email, formInputValues.password)
    }

	return (
		<div>
            <AuthForm 
                submitForm={submitForm}
                handleFormInputChanges={handleFormInputChanges}
                inputValue={formInputValues}
                formType={'Registrera Användare!'}
            />
		</div>
	);
}

export default withRouter(SignupPage);