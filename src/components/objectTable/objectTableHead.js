import React from 'react';

function ObjectTableHead(props) {
	return (
        <thead className="thead-dark">
            {props.children}
        </thead>
	);
}

export default ObjectTableHead;