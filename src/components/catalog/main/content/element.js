import React from 'react';

import CheckFilter from './checkFilter';


import * as actonType from '../../../../redux/actions/actionsType';
import{connect} from 'react-redux';



let visibility = true;



class Element extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price : this.props.el.price,
            color: this.props.el.color,
            size: this.props.el.size,
            fitShoes: this.props.el.fitShoes,
            fitType: this.props.el.fitType,
            length: this.props.el.length,
            shoesType: this.props.el.shoesType,
            waistType: this.props.el.waistType,
            

            minPrice: 0,
        }
        this.price = true;
        this.check = true;
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }


    
    render() {
        let visibility = false;
        
        this.check = CheckFilter(this.props.el, this.props.filter);
        {console.log(this.props.el)}
        {console.log(this.props.filter)}
        
        if(this.check){
            return (
                <div className='trade-position'>
                    <div><img src={this.props.el.linkTo} title='' alt='tit' /></div>
                    <div>{this.props.el.header}</div>
                    <div className="trade-position__price">{this.props.el.price}</div>
                    
                </div>
            )
        } return (<div style={{display:'none'}}></div>)
        
}

}



const mapStateToProps = (state) => {
    return {
        filter: state.filterForAll.filter
    }
}

export default connect(mapStateToProps)(Element);