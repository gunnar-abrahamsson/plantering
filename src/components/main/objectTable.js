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
                <tr>
                    <th scope="row">D123324</th>
                    <td>Tallträsket</td>
                    <td>Tall</td>
                    <td>2000/1900</td>
                    <td><button className="btn btn-dark w-100" type="submit">info</button></td>
                </tr>
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
	);
}

export default ObjectTable;