import React from 'react';
import './authForm.scss';

function LoginForm(props) {
	return (
		<form onSubmit={props.submitForm} className="container">
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                    className="form-control" 
                    onChange={props.handleFormInputChanges} 
                    value={props.inputValue.email} 
                    type="email" 
                    id="email" 
                    placeholder="Email" 
                    required 
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Lösenord</label>
                <input 
                    className="form-control"
                    onChange={props.handleFormInputChanges} 
                    value={props.inputValue.password} 
                    type="password" 
                    id="password" 
                    placeholder="Password" 
                    required 
                />
            </div>
            <button className="btn btn-dark" type="submit">{props.formType}</button>
        </form>
	);
}

export default LoginForm;