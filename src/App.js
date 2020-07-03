import React, { useState } from 'react';
import LoginPage from './components/loginPage/loginPage';

import './App.scss';

function App() {
	const [user, setUser] = useState(null)

	const login = (e) => {
		console.log('login')
		setUser(user ? null : true);
	}
	return (
		<div className="App">
			<LoginPage user={user} login={login} />
			<button onClick={login}>{user ? 'logout': 'login'}</button>
		</div>
	);
}

export default App;
