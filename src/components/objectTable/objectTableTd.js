import React from 'react';

function ObjectTableTd(props) {
	return (
        <td>{props.text}{props.children}</td>
	);
}

export default ObjectTableTd;