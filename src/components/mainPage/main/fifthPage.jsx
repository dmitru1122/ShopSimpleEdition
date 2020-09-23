import React from 'react';
// import StripWithHeader from '../../smollComponents/stripCollection/stripCollection';
import ButtonAllCollection from '../../smollComponents/buttons/buttonAllCollection';

// let shirt = {
//     head: 'Shirt',
//     price: '10p',
//     image: 'https://i.ibb.co/BfbbywK/dress-shirt-logo500.png'
// }
// let jeans = {
//     head: 'Jeans',
//     price: '25p',
//     image: 'https://i.ibb.co/vv5X1ST/jeans-logo500.png',
// }
// let jacket = {
//     head: 'Jacket',
//     price: '30p',
//     image: 'https://i.ibb.co/vv5X1ST/jeans-logo500.png',
// }
// const IteamCollection = {
//     1: jeans,
//     2: shirt,
//     3: jacket,
// }


function FifthPage(props) {
    return(
        <div className={props.styleClass}>
            <div className="content">
                {/* <StripWithHeader header="Discount up to 90%" collection={IteamCollection} /> */}
            </div>
            <div className="content">
                <ButtonAllCollection />
            </div>
        </div>
    )
}

export default FifthPage;