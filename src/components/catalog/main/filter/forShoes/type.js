import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import * as actions from '../../../../../actions/index';


class Type extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slippers: true,
            snickers: true,
            boots: true,
            sandals: true,
            oxfords: true,
        }
        this.handleClickInside = this.handleClickInside.bind(this);
        this.handleChange= this.handleChange.bind(this);
    };

    componentDidMount() {
        this.props.getState(this.state, this.props.nameState);
    }
    componentDidUpdate() {
        this.props.getState(this.state, this.props.nameState);
    }

    handleClickInside (e) {
        this.props.handle(this.props.nameState);
    };

    handleChange (e) {
        const name = e.target.name;
        this.setState({
            [name]: !this.state[name]
        })
    }
    
    render() {
        const list = (
            <form className="filter-list-conteiner">
                        <div className="filter-list">
                            <label >
                                <input type="checkbox" checked={this.state.slippers} name="slippers" onChange={this.handleChange}></input> 
                                Slippers
                            </label>
                        </div>
                        <div className="filter-list">
                            <label >
                                <input type="checkbox" checked={this.state.snickers} name="snickers" onChange={this.handleChange}></input> 
                                Snickers
                            </label>
                        </div>
                        <div className="filter-list">
                            <label >
                                <input type="checkbox" checked={this.state.boots} name="boots" onChange={this.handleChange}></input> 
                                Boots
                            </label>
                        </div>
                        <div className="filter-list">
                            <label >
                            <input type="checkbox" checked={this.state.sandals} name="sandals" onChange={this.handleChange}></input> 
                            Sandals
                            </label>
                        </div>
                        <div className="filter-list">
                            <label >
                            <input type="checkbox" checked={this.state.oxfords} name="oxfords" onChange={this.handleChange}></input> 
                            Oxfords
                            </label>
                        </div>
            </form>
        );
        const check = (this.props.stateThisIteam)?(list):(null);

        return (
            <div>
                <div className="filter-ourself">Type <span className="filter-ourself-show"  onClick={this.handleClickInside }>
                    {(this.props.stateThisIteam)?('-'):('+')}</span></div>
                {check}
            </div>
        )
    }
}

export default Type;