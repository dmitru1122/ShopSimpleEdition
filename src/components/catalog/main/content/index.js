import React from 'react';
// import ForJeans from './iteams/jeans';
import { getDefaultNormalizer } from '@testing-library/react';
// import ShirtExample from './iteams/shirtExample';
import Element from './element';
import {useState, useEffect} from 'react';
// import Filter from './checkFilter';

import { connect } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


// let res = [];

// class Pagination extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstPageClass: 'disable',
//             previousPageClass: 'disable',
//             secondPageClass: 'normal',
//             thirdPageClass: 'normal',
//             lastPageClass: 'normal',

//             previousPageNumber: 0,
//             currentPageNumber: 1,
//             secondPageNumber: 2,
//             thirdPageNumber: 3,


            

//         };
//     }

    
//     render() {
//         const firstPageClass = this.state.firstPageClass + ' ' + 'to-first-page';
//         const previousPageClass= this.state.previousPageClass + ' ' + 'to-previous-page';
//         const secondPageClass = this.state.secondPageClass +  ' ' + 'to-second-page';
//         const thirdPageClass = this.state.thirdPageClass +  ' ' + 'to-third-page';
//         const lastPageClass = this.state.lastPageClass +  ' ' + 'to-last-page'
//         return(
//             <div className="pagination" > 
//                 <div className={firstPageClass}>
//                     <button >&#60;&#60;</button>
//                 </div>
//                 <div className={previousPageClass} >
//                     <button >Previous page</button>
//                 </div>
//                 <div className={previousPageClass} >
//                     <button >{this.state.previousPageNumber}</button>
//                 </div>
//                 <div className="current-page">
//                     <button >{this.state.currentPageNumber}</button>
//                 </div>
//                 <div className={secondPageClass} >
//                     <button >{this.state.secondPageNumber}</button>
//                 </div>
//                 <div className={thirdPageClass} >
//                     <button >{this.state.thirdPageNumber}</button>
//                 </div>
//                 <div className={secondPageClass} >
//                     <button >&#62;</button>
//                 </div>
//                 <div className={lastPageClass} >
//                     <button> &#62;&#62;</button>
//                 </div>
//             </div>
//         )
//     }
// }








































// Work with all content, filter depend from category

class AllElement extends React.Component {
    constructor(props){
        super(props);
        this.state = {data: null};
    }

    // fetch iteam from server
    async componentDidMount() {
        const response = await fetch('http://localhost:8000');
        const json = await response.json();
        this.setState({data: json});
        
    }

    render()
    {      
        const category = this.props.category;
        // check if it load from server
        if(this.state.data == null) {
            return <div>Wait please</div>
        } else {
            return(
                    <>

                {this.state.data.map(element  =>  (
                            // <div  style={{background: 'Red'}}>
                                <React.Fragment key={element.id}> 

 {/* Check category, filter depend category */}
                                    {element.iteam.category == category?  
                                        <Element el={element.iteam}/> :

  // For use all catalog
                                        (category == 'All'?
                                            <Element el={element.iteam} /> :null) 
                                    }
                             </React.Fragment> 
                        // </div>
                                                    )
                                )}
                    </>
                    )
                }
    }
}














// it need only for give category props for Router element



function ForJeans() {
    return(
        <AllElement category="Jeans" />
    )
}
function ForJacket() {
    return(
        <AllElement category="Jacket" />
    )
}
function ForShirt() {
    return(
        <AllElement category="Shirt" />
    )
}
function ForShoes() {
    return(
        <AllElement category="Shoes" />
    )
}
function forDresses() {
    return(
        <AllElement category="Dresses" />
    )
}
function ForAll() {
    return(
        <AllElement category="All" />
    )
}





// Use react-router for history in app

function Content () {
    return( 
        <>
        <div className="catalog-content">
        <div className="catalog-list">
        <Router >
            <Route path="/catalog/forJeans" component={ForJeans}/>
                    <Route path="/catalog/forJacket" component={ForJacket}/>
                    <Route path="/catalog/forShirt"   component={ForShirt}/>
                    <Route path="/catalog/forShoes"  component={ForShoes}/>
                    <Route path="/catalog/forDresses" component={forDresses} />
                    <Route path="/catalog/forAll"  component={ForAll} />
        </Router>
        </div>
        {/* <Pagination /> */}
        </div>
        </>
    )
}





export default Content;

