import React from 'react';

function Loading(props) {
	return (
        <div className="loading">
            <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
            </div>
        </div>
	);
}

export default Loading;