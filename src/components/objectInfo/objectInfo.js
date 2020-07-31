import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../auth/firebase';

import ErrorMessage from '../error/errorMessage';
import Loading from '../loading/loading';

function ObjectInfo(props) {
    
    const [objectInfo, setObjectInfo] = useState({
        samples: [],
    });
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

    const samples = objectInfo.samples.map((sample, index) => {
        // Create route to edit sample
        return <li key={index} ><span className="optimal">sample</span></li>;
    })

	return (
		<div>
            {errorMessage ?
                <ErrorMessage message={errorMessage} />
            : ''}

            {isLoading ?
                <Loading />
            : 
                <div>
                    <h1>Namn: {objectInfo.name}</h1>
                    <h2>Object Id: {objectInfo.objectId}</h2>
                    <h2>Mål plantor/ha: {objectInfo.goal}</h2>
                    <h2>Trädslag: {objectInfo.treeType}</h2>
                    <h2>Provytor</h2>
                    {/* Create route to create new sample */}
                    <ul>
                        {samples}
                    </ul>
                </div>
            }
        </div>
	);
}

export default ObjectInfo;