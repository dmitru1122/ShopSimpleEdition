import React from 'react';
// import {useDispatch, useSelector} from 'react-redux';
import Price from '../univerasl/price';
import ColorFilter from '../univerasl/colorFilter';
import Size from '../univerasl/size';
import Length from './length';



import * as actionType from '../../../../../redux/actions/actionsType';
import {connect} from 'react-redux';

let stateFromChildren = {

}


class ForJacket extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            price: true,
            color: true,
            size: true,
            length: true,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleStateFromChildren = this.handleStateFromChildren.bind(this);
    }

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
    }

    handleStateFromChildren(data, target) {
        const targ = target;
        stateFromChildren = {...stateFromChildren, [target]: data};
        // console.log(stateFromChildren);
    } 

    render() {
        return (
            <div>
                <Price getState={this.handleStateFromChildren}
                stateThisIteam={this.state.price} 
                nameState="price" 
                handle={this.handleClick} />

                <ColorFilter getState={this.handleStateFromChildren}
                stateThisIteam={this.state.color} 
                nameState="color" 
                handle={this.handleClick} />

                <Size getState={this.handleStateFromChildren}
                stateThisIteam={this.state.size} 
                nameState="size" 
                handle={this.handleClick} />

                <Length getState={this.handleStateFromChildren}
                stateThisIteam={this.state.length} 
                nameState="length" 
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

export default connect(null, mapDispatchToProps)(ForJacket);