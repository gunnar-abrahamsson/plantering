import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import firebase from '../../auth/firebase'

import './navbar.scss'
import { AuthContext } from '../../auth/userContext';

function Navbar() {
	const user = useContext(AuthContext);

	const logout = () => {
		firebase.auth().signOut()
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<Link className="navbar-brand" to="/">Planterings Uppföljning</Link>
			{user ?
				<ul className="navbar-nav">
					<li className="nav-item active logout" onClick={logout}>
						<span className="nav-link">Logout</span>
					</li>
				</ul>
				: ''
			}
		</nav>
	);
}

export default Navbar;