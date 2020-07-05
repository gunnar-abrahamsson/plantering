import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { auth } from '../../auth/firebase'

import './navbar.scss'
import { AuthContext } from '../../auth/userContext';

function Navbar() {
	const user = useContext(AuthContext);

	const logout = () => {
		auth.signOut()
	}

	return (
		<nav className="navbar navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">Planteringsuppföljning</Link>
			{user ?
				<ul className="navbar-nav">
					<li className="nav-item active logout" onClick={logout}>
						<span className="nav-link">Logga ut</span>
					</li>
				</ul>
				: ''
			}
		</nav>
	);
}

export default Navbar;