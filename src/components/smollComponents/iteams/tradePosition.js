// in this file i must write function for all prodact what i will sell(image with description)

import React from 'react';
import './iteams.css';

class TradePosition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price : parseInt(this.props.element.price),
            minPrice: 0,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.setState({
            minPrice: this.state.minPrice + 10
        })
    }
    // alert(props.src);
    // console.log(props.sc);
    // console.log(props.sc.image)
    render() {
        if(this.state.price > this.state.minPrice ) {
        return (
            <div className='trade-position'>
                <div><img src={this.props.element.image} title='' alt='tit' /></div>
                <div>{this.props.element.head}</div>
                <div className="trade-position__price">{this.props.element.price}</div>
            </div>
        )}
        else return ( <div onClick={this.handleClick}>Change minimal Price +10</div>);
    }
}

export default TradePosition;