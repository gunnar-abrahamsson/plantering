import React, { useState, useContext } from 'react';
import { withRouter, Redirect, Link } from 'react-router-dom'
import './loginPage.scss';
import AuthForm from '../authForm/authFrom';
import firebase from '../../auth/firebase';
import { AuthContext } from '../../auth/userContext';

function LoginPage({ history, location }) {
    const [formInputValues, setFormInputValues] = useState({
        email: '',
        password: '',
    })

    const login = async (email, password) => {
        try {
            //send login data to firebase
            await firebase.auth().signInWithEmailAndPassword(email, password);
            history.push('/');
        } catch (err) {
            console.error(err);
        }
    };
    
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
            />
            <div className="formList container">
                <ul>
                    <li><Link to={'/registrera'}>Skapa användare</Link></li>
                </ul>
            </div>
		</div>
	);
}

export default withRouter(LoginPage);