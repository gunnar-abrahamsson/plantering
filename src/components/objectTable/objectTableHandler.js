import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import ErrorMessage from '../error/errorMessage';
import ObjectTable from './objectTable'
import { db } from '../../auth/firebase'

function ObjectTableHandler(props) {
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
				<ObjectTable tableData={tableData} />
			}
			{errorMessage ? 
				<ErrorMessage message={errorMessage} />
			:
				''
			}
		</div>
	);
}

export default ObjectTableHandler;