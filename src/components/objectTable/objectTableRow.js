import React from 'react';

function ObjectTable(props) {
	return (
        <tr>
            {props.children}
        </tr>
	);
}

export default ObjectTable;