import React from 'react';
// import {useSelector, useDispatch} from 'react-redux';
// import * as actions from '../../../../../redux/actions/index';


class WaistType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            low: true,
            mid: true,
            high: true,
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
            <div className="filter-list-conteiner">
                        <div className="filter-list">
                            <label >
                                <input type="checkbox" checked={this.state.low} name="low" onChange={this.handleChange}></input> 
                                Low
                            </label>
                        </div>
                        <div className="filter-list">
                            <label >
                                <input type="checkbox" checked={this.state.mid} name="mid" onChange={this.handleChange}></input> 
                                Mid
                            </label>
                        </div>
                        <div className="filter-list">
                            <label >
                                <input type="checkbox" checked={this.state.high} name="high" onChange={this.handleChange}></input> 
                                High
                            </label>
                        </div>
            </div>
        );
        const check = (this.props.stateThisIteam)?(list):(null);

        return (
            <div>
                <div className="filter-ourself">Waist Type <span className="filter-ourself-show"  onClick={this.handleClickInside }>
                    {(this.props.stateThisIteam)?('-'):('+')}</span></div>
                {check}
            </div>
        )
    }
}

export default WaistType;