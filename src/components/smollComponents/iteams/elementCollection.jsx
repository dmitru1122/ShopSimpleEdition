import React from 'react';
import Test from '../../images/collection/man/jacket/leather_jacket_logo500.png';
import './iteams.css';

function Element(props) {   
    let classStyle =  + ' ' + 'background-image element-collection-block';
    return (
        <div className={classStyle}>
            <div className="element-collection-name" ><img src={props.element.image} />{props.name}</div>
        </div>
    )
}

export default Element;