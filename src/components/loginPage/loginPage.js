import React, { useState, useContext, useCallback } from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom'
import firebase from '../../auth/firebase';
import { AuthContext } from '../../auth/userContext';

import AuthForm from '../authForm/authFrom';
import ErrorMessage from '../error/errorMessage';

function LoginPage({ history }) {
    const [formInputValues, setFormInputValues] = useState({
        email: '',
        password: '',
    })

    const [errorMessage, setErrorMessage] = useState('');

    const login = useCallback(async (email, password) => {
        try {
            //send login data to firebase
            setErrorMessage('');
            await firebase.auth().signInWithEmailAndPassword(email, password);
            history.push('/');
        } catch (err) {
            setErrorMessage(err.message)
        }
    }, [history]);
    
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

    const user = useContext(AuthContext)
    if(user) {
        //redirect to main if user is logged in
        return <Redirect to="/" />
    }
    
	return (
		<div>
            <AuthForm 
                submitForm={submitForm}
                handleFormInputChanges={handleFormInputChanges}
                inputValue={formInputValues}
                formType={'Logga In!'}
                errorMessage={errorMessage}
            />
            <div className="formList container">
                <ul>
                    <li><Link to={'/registrera'}>Skapa användare</Link></li>
                </ul>
            </div>
            {errorMessage ? 
                <ErrorMessage message={errorMessage} />
                : ''
            }
		</div>
	);
}

export default withRouter(LoginPage);