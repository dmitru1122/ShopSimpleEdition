import React from 'react';
import arrow from '../../images/icon/Arrow.svg';
import './buttons.css';
import {Link} from 'react-router-dom';

function ButtonAllCollection() {
    return (
        <Link to="/catalog/forAll" title='go to the whole collection'>
        <div className='button-all-collection'>
            <span>All collection</span> <img src={arrow} />
        </div>
        </Link>
    )
}

export default ButtonAllCollection;