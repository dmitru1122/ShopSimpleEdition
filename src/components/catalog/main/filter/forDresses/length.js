import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../../../../redux/actions/index';


class Length extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            short: true,
            regular: true,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClickInside = this.handleClickInside.bind(this);
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
            <div className="filter-list-conteiner">
                        <div className="filter-list">
                            <label >
                                <input type="checkbox" checked={this.state.short} name="short" onChange={this.handleChange}></input> 
                                Short
                            </label>
                        </div>
                        <div className="filter-list">
                            <label >
                                <input type="checkbox" checked={this.state.regular} name="regular" onChange={this.handleChange}></input> 
                                Regular
                            </label>
                        </div>
            </div>
        );
        const check = (this.props.stateThisIteam)?(list):(null);

        return (
            <div>
                <div className="filter-ourself">Length <span className="filter-ourself-show"  onClick={this.handleClickInside }>
                    {(this.props.stateThisIteam)?('-'):('+')}</span></div>
                {check}
            </div>
        )
    }
}

export default Length;