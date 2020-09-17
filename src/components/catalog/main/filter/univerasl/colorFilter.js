import React from 'react';
import * as actions from '../../../../../redux/actions/index';

// import {useSelector, useDispathch} from 'react-redux';

class ColorFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            black: true,
            white: true,
            yellow: true,
            green: true,
            red: true,
            brown: true,
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

    handleClickInside(e) {

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
            <div className="filter-list-conteiner for-change-bullet">
                    <div className="add-bullet-black filter-list">
                        <label>
                            <input type="checkbox" checked={this.state.black} name="black" onChange={this.handleChange}></input>
                                Black
                        </label>
                    </div>
                    <div className="add-bullet-white filter-list">
                        <label>
                            <input type="checkbox" checked={this.state.white} name="white" onChange={this.handleChange}></input>
                                White
                        </label>
                    </div>
                    <div className="add-bullet-yellow filter-list">
                        <label>
                            <input type="checkbox" checked={this.state.yellow} name="yellow" onChange={this.handleChange}></input>
                                Yellow
                        </label>
                    </div>
                    <div className="add-bullet-green filter-list">
                        <label>
                            <input type="checkbox" checked={this.state.green} name="green" onChange={this.handleChange}></input>
                                Green
                        </label>
                    </div>
                    <div className="add-bullet-red filter-list">
                        <label>
                            <input type="checkbox" checked={this.state.red} name="red" onChange={this.handleChange}></input>
                                Red
                        </label>
                    </div>
                    <div className="add-bullet-brown filter-list">
                        <label>
                            <input type="checkbox" checked={this.state.brown} name="brown" onChange={this.handleChange}></input>
                                Brown
                        </label>
                    </div>
            </div>);
        const check = (this.props.stateThisIteam)?(list):(null);
        return (
            <div >
                <div className="filter-outself">Color <span className="filter-ourself-show"  onClick={this.handleClickInside }>
                    {(this.props.stateThisIteam)?('-'):('+')}</span></div>
                {check}
            </div>
        );
    }
}

export default ColorFilter;