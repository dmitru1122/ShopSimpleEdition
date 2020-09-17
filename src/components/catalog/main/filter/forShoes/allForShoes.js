import React from 'react';
import Price from '../univerasl/price';
import Color from '../univerasl/colorFilter';
import Type from './type';


import * as actionType from '../../../../../redux/actions/actionsType';
import {connect} from 'react-redux';

let stateFromChildren = {
    
}

class AllForShoes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: true,
            shoesType: true,
            price: true,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleStateFromChildren = this.handleStateFromChildren.bind(this);
    };
    
    componentDidMount(){
        this.props.addFilter(stateFromChildren)
    }


    componentWillUnmount() {
        this.props.deleteFilter();
    }

    handleClick( type) {
        this.setState({
            [type]: !this.state[type],
        });
    }
    
    handleStateFromChildren(data, target) {
        const targ = target;
        stateFromChildren = {...stateFromChildren, [target]: data};
        // console.log(stateFromChildren);
    } 

    render() {
        return(
            <div>
                <Price getState={this.handleStateFromChildren}
                stateThisIteam={this.state.price} 
                nameState="price" 
                handle={this.handleClick} />

                <Color getState={this.handleStateFromChildren}
                stateThisIteam={this.state.color} 
                nameState="color" 
                handle={this.handleClick} />

                <Type getState={this.handleStateFromChildren}
                stateThisIteam={this.state.shoesType} 
                nameState="shoesType" 
                handle={this.handleClick}/>


                <div onClick={() => this.props.addFilter(stateFromChildren)}>
                    Use filter
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        
        addFilter: (data) => dispatch({
            type: actionType.addFilter,
            data,
       }),
       deleteFilter: () => dispatch ({
           type: actionType.deleteFilter,
       })
    }
}

export default connect(null, mapDispatchToProps)(AllForShoes);