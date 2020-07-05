import React from 'react';

function ObjectTable(props) {
	return (
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
				{props.tableData}
			</tbody>
		</table>
	);
}

export default ObjectTable;