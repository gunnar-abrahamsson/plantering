import React, { useState, useCallback } from 'react';
import { withRouter, Link } from 'react-router-dom';
import AuthForm from '../authForm/authFrom';
import firebase from '../../auth/firebase';
import ErrorMessage from '../error/errorMessage';

function SignupPage({ history }) {
    const [formInputValues, setFormInputValues] = useState({
        email: '',
        password: '',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const createAccount = useCallback(async (email, password) => {
        //send login data to firebase
        try {
            setErrorMessage('')
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            history.push('/');
        } catch (err) {
            setErrorMessage(err.message)
        }
    }, [history])
    
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
            <div className="formList container">
                <ul>
                    <li><Link to={'/loggain'}>Logga in</Link></li>
                </ul>
            </div>
            {errorMessage ? 
                <ErrorMessage message={errorMessage} />
                : ''
            }
		</div>
	);
}

export default withRouter(SignupPage);