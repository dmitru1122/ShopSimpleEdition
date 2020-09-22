import React from 'react';
import ForJeans from './forJeans/allForJeans';
import ForJacket from './forJacket/allForJacket';
import ForShirt from './forShirt/allForShirt';
import ForShoes from './forShoes/allForShoes';
import ForWomanDress from './forDresses/allForDress';
import ForAll from './forAll/forAll';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';







// Attempt control all filter from this file,
//  bad idea because it will be very much import and hard to understand what happend
// and where it is happend

// class ForAllFilter extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         const category = this.props.category;

//         switch(category) {
//             case "Dresses":
//                 return( 
//                     <div>bla-la-la</div>
//                 )
//         }
//     }
    
// }

// function forDresses() {
//     return(
//         <ForAllFilter category="Dresses" />
//     )
// }

class AllFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeCollection:  this.props.typeCollection,
        }
    }

    render() {
    const typeCollection = this.props.type;
        return (
            <Router>
                    <form className="all-filter-conteiner">
                    <Route path="/catalog/forJeans" component={ForJeans}/>
                    <Route path="/catalog/forJacket" component={ForJacket}/>
                    <Route path="/catalog/forShirt"   component={ForShirt}/>
                    <Route path="/catalog/forShoes"  component={ForShoes}/>
                    <Route path="/catalog/forDresses" component={ForWomanDress} />
                    <Route path="/catalog/forAll"  component={ForAll} />
                    
                
                    </form>
               
            </Router>
        )
    }
}

export default AllFilter;