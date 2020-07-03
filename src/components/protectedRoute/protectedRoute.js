import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../auth/userContext'

function ProtectedRoute({component: Component, ...rest}) {
	//Get user
    const user = useContext(AuthContext)
	return (
		<Route {...rest}
			render={(props) => {
				if(!user){
					return <Redirect to={'/loggain'} />
				}
				return <Component {...props} />
			}}
		/>
	);
}

export default ProtectedRoute;