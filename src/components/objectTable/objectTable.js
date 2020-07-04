import React from 'react';
import ObjectTableBody from './objectTableBody'
import ObjectTableHead from './objectTableHead'
import ObjectTableRow from './objectTableRow'
import ObjectTableTd from './objectTableTd'
import ObjectTableTh from './objectTableTh'

function ObjectTable(props) {

    // Fetch table data from fire base


	return (
        <table className="table table-striped">
            <ObjectTableHead>
                <ObjectTableRow>
                    <ObjectTableTh scope={'col'} colSpan={1} text={'Id'} />
                    <ObjectTableTh scope={'col'} colSpan={1} text={'Namn'} />
                    <ObjectTableTh scope={'col'} colSpan={1} text={'Trädslag'} />
                    <ObjectTableTh scope={'col'} colSpan={2} text={'Mål Plantor/ha'} />
                </ObjectTableRow>
            </ObjectTableHead>
            <ObjectTableBody>
                <ObjectTableRow>
                    <th scope="row">D123324</th>
                    <td>Tallträsket</td>
                    <td>Tall</td>
                    <td>2000/1900</td>
                    <td><button className="btn btn-dark w-100" type="submit">info</button></td>
                </ObjectTableRow>
                <ObjectTableRow>
                    <th scope="row">D213321</th>
                    <td>AHA</td>
                    <td>Gran</td>
                    <td>1800/1880</td>
                    <td><button className="btn btn-dark w-100" type="submit">info</button></td>
                </ObjectTableRow>
                <ObjectTableRow>
                    <th scope="row">D123312</th>
                    <td>Getingberg</td>
                    <td>Tall</td>
                    <td>2000/2100</td>
                    <td><button className="btn btn-dark w-100" type="submit">info</button></td>
                </ObjectTableRow>
            </ObjectTableBody>
        </table>
	);
}

export default ObjectTable;