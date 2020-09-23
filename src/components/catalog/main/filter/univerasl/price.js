import React from 'react';
// import {useSelector, useDispatch} from 'react-redux';
// import * as actions from '../../../../../redux/actions/index';


class Price extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            '10': true,
            '11-20': true,
            '21-50': true,
            '51-100': true,
            '101': true,
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
                            <input type="checkbox" checked={this.state[10]} name="10" onChange={this.handleChange}></input> 
                            Under 10$ 
                            </label>
                         </div>
                        <div className="filter-list">
                            <label>
                            <input type="checkbox" checked={this.state['11-20']} name="11-20" onChange={this.handleChange}></input>
                            $11 to $20
                            </label>
                        </div>
                        <div className="filter-list">
                            <label>
                                <input type="checkbox" checked={this.state['21-50']} name="21-50" onChange={this.handleChange}></input>
                                $21 to $50
                            </label>
                        </div>
                        <div className="filter-list">
                            <label>
                            <input type="checkbox" checked={this.state['51-100']} name="51-100" onChange={this.handleChange}></input>
                            $51 to $100
                            </label>
                        </div>
                        <div className="filter-list">
                            <label>
                            <input type="checkbox" checked={this.state[101]} name="101" onChange={this.handleChange}></input>
                            $101 & Above
                            </label>
                        </div>
            </div>
        );
        const check = (this.props.stateThisIteam)?(list):(null);

        return (
            <div>
                <div className="filter-ourself">Price <span className="filter-ourself-show"  onClick={this.handleClickInside }>
                    {(this.props.stateThisIteam)?('-'):('+')}</span></div>
                {check}
            </div>
        )
    }
}

export default Price;