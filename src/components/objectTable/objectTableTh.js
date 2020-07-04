import React from 'react';

function ObjectTableTh(props) {
	return (
        <th scope={props.scope} colSpan={props.colSpan}>{props.text}</th>
	);
}

export default ObjectTableTh;