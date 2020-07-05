import React, { useEffect, useState } from 'react';
import { db } from '../../auth/firebase';

import ErrorMessage from '../error/errorMessage';
import Loading from '../loading/loading';

function ObjectInfo(props) {
    
    const [objectInfo, setObjectInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null) ;
    
    useEffect(() => {
        if(props.location.state) {
            setObjectInfo(props.location.state)
            setIsLoading(false)
            return;
        }
        const docId = props.match.params.info;
        //fetch objectInfo data if no data is sent by link
        const getObjectDocument = async () => {
            try {
                const objectDoc = await db.collection('planteringsObject').doc(docId).get();
                setObjectInfo(objectDoc.data());
                setIsLoading(false);
            } catch(err) {
                setErrorMessage(err.message);
            }
        };

        getObjectDocument();
    }, [props.location.state, props.match.params.info])

	return (
		<div>
            {errorMessage ?
                <ErrorMessage message={errorMessage} />
            : ''}

            {isLoading ?
                <Loading />
            : 
                objectInfo.name
            }
        </div>
	);
}

export default ObjectInfo;