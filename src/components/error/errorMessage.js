import React from 'react';

function ErrorMessage(props) {
	return (
        <div className="alert alert-warning" role="alert">
            {props.message}
        </div>
	);
}

export default ErrorMessage;