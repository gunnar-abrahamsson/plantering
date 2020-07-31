import React from 'react';
import { Link } from 'react-router-dom'
import './main.scss';

import ObjectTableHandler from '../objectTable/objectTableHandler'

function Main(props) {
	return (
        <div>
            <Link to={'/ny-rapport'} className="btn btn-dark mx-2 mt-2 mb-2">Nytt planterings Object</Link>
            <ObjectTableHandler />
        </div>
	);
}

export default Main;