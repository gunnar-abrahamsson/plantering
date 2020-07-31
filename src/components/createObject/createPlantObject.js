import React from 'react';
import PlantObjectForm from './createPlantObjectForm'

function CreatePlantObject(props) {
	return (
        <div className="createPlantObject">
            <h1 className="infoTitle">Skapa nytt Planterings Object</h1>
            <PlantObjectForm />
        </div>
	);
}

export default CreatePlantObject;