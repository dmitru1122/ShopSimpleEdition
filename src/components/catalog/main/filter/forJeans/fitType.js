import React from 'react';
// import {useSelector, useDispatch} from 'react-redux';
// import * as actions from '../../../../../redux/actions/index';


class FitType extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skinny: true,
            regular: true,
            straight: true,
            loose: true,
        }
        this.handleClickInside = this.handleClickInside.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };


    componentWillMount() {
        // console.log(`i am did mount ${this.state}`);
        // console.log(this.state);
        this.props.getState(this.state, this.props.nameState);
    }

    componentDidUpdate() {
        this.props.getState(this.state, this.props.nameState);
    }

    handleClickInside (e) {
        this.props.handle(this.props.nameState);
        
        // console.log(this.props.nameState);
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
                                <input type="checkbox" checked={this.state.skinny} name="skinny" onChange={this.handleChange}></input> 
                                Skinny
                            </label>
                        </div>
                        <div className="filter-list">
                            <label >
                                <input type="checkbox" checked={this.state.regular} name="regular" onChange={this.handleChange}></input> 
                                Regular
                            </label>
                        </div>
                        <div className="filter-list">
                            <label >
                                <input type="checkbox" checked={this.state.straight} name="straight" onChange={this.handleChange}></input> 
                                Straight
                            </label>
                        </div>
                        <div className="filter-list">
                            <label >
                            <input type="checkbox" checked={this.state.loose} name="loose" onChange={this.handleChange}></input> 
                            Loose
                            </label>
                        </div>
            </div>
        );
        const check = (this.props.stateThisIteam)?(list):(null);

        return (
            <div>
                <div className="filter-ourself">Fit Type <span className="filter-ourself-show"  onClick={this.handleClickInside }>
                    {(this.props.stateThisIteam)?('-'):('+')}</span></div>
                {check}
            </div>
        )
    }
}

export default FitType;