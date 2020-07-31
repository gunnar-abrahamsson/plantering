import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from './auth/userContext'
import ProtectedRoute from './components/protectedRoute/protectedRoute'

import LoginPage from './components/loginPage/loginPage';
import Main from './components/main/main'
import SignupPage from './components/signupPage/signupPage';
import Navbar from './components/navbar/navbar'
import ObjectInfo from './components/objectInfo/objectInfo';
import CreatePlantObject from './components/createObject/createPlantObject';
import TakeSampleArea from './components/objectInfo/takeSampleArea';
import EditSampleArea from './components/objectInfo/editSampleArea';

import './App.scss';

function App() {
	return (
		<AuthProvider>
            <Navbar />
			<Switch>
				<Route exact path="/loggain" component={LoginPage} />
				<Route exact path="/registrera" component={SignupPage} />
				<ProtectedRoute exact path="/ny-rapport" component={CreatePlantObject} />
				<ProtectedRoute exact path="/:info/ny-provyta" component={TakeSampleArea} />
				<ProtectedRoute path="/:info/edit/:sampleId" component={EditSampleArea} />
				<ProtectedRoute path="/:info" component={ObjectInfo} />
				<ProtectedRoute exact path="/" component={Main} />
			</Switch>
		</AuthProvider>
	);
}

export default App;
