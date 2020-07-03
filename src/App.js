import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from './auth/userContext'
import ProtectedRoute from './components/protectedRoute/protectedRoute'
import LoginPage from './components/loginPage/loginPage';
import Main from './components/main/main'

import './App.scss';

function App() {
	return (
		<AuthProvider>
			<Switch>
				<Route exact path="/login" component={LoginPage} />
				<ProtectedRoute path="/" component={Main} />
			</Switch>
		</AuthProvider>
	);
}

export default App;
