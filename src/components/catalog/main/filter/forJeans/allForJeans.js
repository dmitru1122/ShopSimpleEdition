import React from 'react';
import Price from '../univerasl/price';
import ColorFilter from '../univerasl/colorFilter';
import FitType from './fitType';
import WaistType from './waistType';
import Size from '../univerasl/size';


import * as actionType from '../../../../../redux/actions/actionsType';
import {connect} from 'react-redux';

let stateFromChildren = {

}
class AllForJeans extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: true,
            color: true,
            fitType: true,
            waistType: true,
            lenght: true,
            size: true,

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

    handleClick(type) {
        this.setState({
            [type]: !this.state[type],
        })
    };

    handleStateFromChildren(data, target) {
        const targ = target;
        // console.log(data);
        stateFromChildren = {...stateFromChildren, [target]: data};
        // console.log(stateFromChildren);
    } 

    render() {
        
        return (
            <div>
                <Price handle={this.handleClick}
                getState={this.handleStateFromChildren}
                nameState="price" 
                stateThisIteam={this.state.price} />


                <ColorFilter handle={this.handleClick} 
                getState={this.handleStateFromChildren}
                nameState="color" 
                stateThisIteam={this.state.color} />

                <FitType handle={this.handleClick} 
                getState={this.handleStateFromChildren} 
                nameState="fitType" 
                stateThisIteam={this.state.fitType} />

                <WaistType handle={this.handleClick} 
                getState={this.handleStateFromChildren} 
                nameState="waistType" 
                stateThisIteam={this.state.waistType} />

                <Size stateThisIteam={this.state.size} 
                getState={this.handleStateFromChildren}
                nameState="size" 
                handle={this.handleClick} />

                <div onClick={() => this.props.addFilter(stateFromChildren)}>
                    Use filter
                </div>
            </div>
        )
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

export default connect(null, mapDispatchToProps)(AllForJeans);