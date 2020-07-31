import React from 'react';

function OfflineLoggin(props) {
	return (
        <li onClick={props.offlineLogginHandler} className="offlineLoggin">Logga in offline</li>
	);
}

export default OfflineLoggin;