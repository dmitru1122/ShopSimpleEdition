import React from 'react';
// import {useSelector, useDispatch} from 'react-redux';
// import * as actions from '../../../../../redux/actions/index';
// 

class Size extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xxs: true,
            xs: true,
            s: true,
            m: true,
            l: true,
            xl: true,
            xxl: true,
            xxxl: true,
        }
        this.handleClickInside = this.handleClickInside.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
                                <input type="checkbox" checked={this.state.xxs} name="xxs" onChange={this.handleChange}></input> 
                                XXS
                            </label>
                        </div>
                        <div className="filter-list">
                            <label >
                                <input type="checkbox" checked={this.state.xs} name="xs" onChange={this.handleChange}></input> 
                                xs
                            </label>
                        </div>
                        <div className="filter-list">
                            <label >
                                <input type="checkbox" checked={this.state.s} name="s" onChange={this.handleChange}></input> 
                                S
                            </label>
                        </div>
                        <div className="filter-list">
                            <label >
                            <input type="checkbox" checked={this.state.m} name="m" onChange={this.handleChange}></input> 
                            M
                            </label>
                        </div>
                        <div className="filter-list">
                            <label >
                            <input type="checkbox" checked={this.state.l} name="l" onChange={this.handleChange}></input> 
                            L
                            </label>
                        </div>
                        <div className="filter-list">
                            <label >
                            <input type="checkbox" checked={this.state.xl} name="xl" onChange={this.handleChange}></input> 
                            XL
                            </label>
                        </div>
                        <div className="filter-list">
                            <label >
                            <input type="checkbox" checked={this.state.xxl} name="xxl" onChange={this.handleChange}></input> 
                            XXL
                            </label>
                        </div>
                        <div className="filter-list">
                            <label >
                            <input type="checkbox" checked={this.state.xxxl} name="xxxl" onChange={this.handleChange}></input> 
                            XXXL
                            </label>
                        </div>
            </div>
        );
        const check = (this.props.stateThisIteam)?(list):(null);

        return (
            <div>
                <div className="filter-ourself">Size <span className="filter-ourself-show"  onClick={this.handleClickInside }>
                    {(this.props.stateThisIteam)?('-'):('+')}</span></div>
                {check}
            </div>
        )
    }
}

export default Size;