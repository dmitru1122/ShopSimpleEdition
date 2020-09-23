import React from 'react';
import ButtonAllCollection from '../../smollComponents/buttons/buttonAllCollection';
import StripWithHeader from '../../smollComponents/stripCollection/stripCollection';
import Element from '../../smollComponents/iteams/elementCollection';
import v from '../../images/collection/woman/woman_collection_logo.png';
import man from '../../images/collection/man/man_collection_logo.png';

import {Link} from 'react-router-dom';
const links ={
    imageMan: man,
    imageWoman: v,
}

// async function getCollection() {
//     let response = await fetch('http://localhost:8000/posts');
    
//     if(response.ok) {
//         let res = await response.json;
//         console.log(res);
//         // await console.log(response.json());
//     }
//     // console.log(response);

// }
// function getCollection() {
//     fetch('http://localhost:8000/posts').then(async (result) => {
//         if (result.ok) {
//             let res = await result.json();
//             // let map = res.map(c => console.log(c));
//         }
//     })
// }

// getCollection();

let shirt = {
    id: 1,
    head: 'Shirt',
    price: '10p',
    image: 'https://i.ibb.co/BfbbywK/dress-shirt-logo500.png'
}
let jeans = {
    id: 2,
    head: 'Jeans',
    price: '25p',
    image: 'https://i.ibb.co/vv5X1ST/jeans-logo500.png',
}
let jacket = {
    id: 3,
    head: 'Jacket',
    price: '30p',
    image: 'https://i.ibb.co/vv5X1ST/jeans-logo500.png',
}
const IteamCollection = [
    jeans,
    shirt,
    jacket,
]
// const IteamCollection = {
//     1: jeans,
//     2: shirt,
//     3: jacket,
// }

function CollectionHeader(props) {
    const sex = props.sex;
    const lin = props.link;
    return(
        <div className="collection-header">
            <div>
                <div>{sex} collection</div>
                <div>Clothe</div>
                <div>Button</div>
            </div>
            <div>
                <img src={lin} title='' alt='' />
            </div>
        </div>
    )
}

function CollectionMan(props) {
    const srcImages = props.srcImages;
    return( 
        <>
            <div>
                <Link to="/catalog/forJeans">
                    <Element name='Jeans' element={jacket} nameStyle='jeans-man' />
                </Link>
            </div>
            <div>
                <Link to="/catalog/forJacket">
                    <Element name='Jacket' element={jeans} nameStyle='jacket-man' />
                </Link>
            </div>
            <div>
                <Link to="/catalog/forShirt">
                    <Element name='Shirt' element={shirt} nameStyle='shirt-man'/>
                </Link>
            </div>
            <div>
                <Link to="/catalog/forSuits">
                    <Element name='Suits' element={shirt} nameStyle='suits-man' />
                </Link>
            </div>
        </>
    )
}
function CollectionWoman(props) {
    const srcImages = props.srcImages;
    return( 
        <>
            <div>
                <Link to="/catalog/forJeans">
                    <Element name='Jeans' element={shirt} nameStyle='jeans-woman'/>
                </Link>
            </div>
            <div>
                <Link to="/catalog/forShirt">
                    <Element name='Coats' element={shirt} nameStyle='coats-woman' /> 
                </Link>
            </div>
            <div>
                <Link to="/catalog/forDresses">
                    <Element name='Dress' element={jeans} nameStyle='dress-woman' />
                </Link>
            </div>
            <div>
                <Link to="/catalog/forJacket">
                    <Element name='Kimono' element={jacket} nameStyle='kimono-woman' />
                </Link>
            </div>
        </>
    )
}

function ManCollection() {
    return (
        <>
            <section>
                <CollectionHeader sex="Man" link={links.imageMan}/>
            </section>
            <section className="man-collection">
                <CollectionMan />
            </section>
        </>
        
    )
}

function WomanCollection() {
    return (
        <>
            <section>
                <CollectionHeader sex="Woman" link={links.imageWoman} />
                </section>
                <section className="man-collection">
                <CollectionWoman srcImages=" "/>
            </section>
        </>
    )
}


function ManWomanCollection() {
    return (
        <article className="content">
                <div className="thp-man-woman-collection  ">
                    <div className="thp-man-conteiner"> 
                    <ManCollection />
                    </div>
                    <div className="thp-woman-conteiner">
                    <WomanCollection />
                    </div>
                </div>
            </article>
    )
}


function ThirdPage(props) {
    
    return (
        <div className={props.styleClass} >
            <ManWomanCollection />
            


            <article className="content">
                <StripWithHeader header="New collection" collection={IteamCollection}/>
            </article>
            <aside className="content">
                <ButtonAllCollection />
            </aside>
        </div>
    )
}

export default ThirdPage;