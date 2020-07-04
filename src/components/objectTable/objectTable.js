import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import ErrorMessage from '../error/errorMessage';
import { db } from '../../auth/firebase'

function ObjectTable(props) {
    const [plantingObjects, setPlantingObjects] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    // Fetch table data from fire base
    useEffect(() => {
        const getPlantingObjects = async () => {
            try {
                const querySnapshot = await db.collection('planteringsObject').get();
                // save array to variable before setting it in plantobjects
                let planteringsObjectsArray = [];
                querySnapshot.forEach(doc => {
                    planteringsObjectsArray.push({...doc.data(), id: doc.id})
                });
                setPlantingObjects(planteringsObjectsArray);
                setIsLoading(false);
            } catch (err) {
                setErrorMessage(err.message)
            }
        }

        getPlantingObjects();
        
    }, []);

    const tableData = plantingObjects.map((plantingObject, index) => {
        const {objectId, name, treeType, goal, id} = plantingObject
        return (
            <tr key={index}>
                <th scope="row">{objectId}</th>
                <td>{name}</td>
                <td>{treeType}</td>
                <td>{goal}</td>
                <td><Link to={`/${id}`} className="btn btn-dark w-100" type="submit">info</Link></td>
            </tr>
        )
    })
	return (
        <div>
            {isLoading ?
                <div className="loading">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            :
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Namn</th>
                            <th scope="col">Trädslag</th>
                            <th scope="col" colSpan="2">Mål Plantor/ha</th>
                        </tr>
                    </thead>
                        <tbody>
                            {tableData}
                            <tr>
                                <th scope="row">D213321</th>
                                <td>AHA</td>
                                <td>Gran</td>
                                <td>1800/1880</td>
                                <td><button className="btn btn-dark w-100" type="submit">info</button></td>
                            </tr>
                            <tr>
                                <th scope="row">D123312</th>
                                <td>Getingberg</td>
                                <td>Tall</td>
                                <td>2000/2100</td>
                                <td><button className="btn btn-dark w-100" type="submit">info</button></td>
                            </tr>
                        </tbody>
                </table>
            }
            {errorMessage ? 
                <ErrorMessage message={errorMessage} />
            :
                ''
            }
        </div>
	);
}

export default ObjectTable;