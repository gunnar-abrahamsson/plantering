import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from './auth/userContext'
import ProtectedRoute from './components/protectedRoute/protectedRoute'

import LoginPage from './components/loginPage/loginPage';
import Main from './components/main/main'
import SignupPage from './components/signupPage/signupPage';
import Navbar from './components/navbar/navbar'
import ObjectInfo from './components/objectInfo/objectInfo';

import './App.scss';

function App() {
	return (
		<AuthProvider>
            <Navbar />
			<Switch>
				<Route exact path="/loggain" component={LoginPage} />
				<Route exact path="/registrera" component={SignupPage} />
				<Route path="/:info" component={ObjectInfo} />
				<ProtectedRoute path="/" component={Main} />
			</Switch>
		</AuthProvider>
	);
}

export default App;
