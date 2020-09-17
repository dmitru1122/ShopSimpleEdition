import React, {Fragment} from 'react';
import './addIteam.css';
import Cross from '../images/icon/cross-black-button.png';


import {useSelector, useDispatch, connect } from 'react-redux';
import {addIteam} from '../../redux/actions/addIteam';
import * as actionsType from '../../redux/actions/actionsType';
import { render } from '@testing-library/react';

import {Link} from 'react-router-dom';

import ColorFilter from '../catalog/main/filter/univerasl/colorFilter';
import Length from '../catalog/main/filter/forJacket/length';
import Size from '../catalog/main/filter/univerasl/size';


class AddIteam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: '',
            linkTo: '',
            category: '',
            

            price: '',
            size: '',
            color: '',
            length:'',
            shoesType: '',
            fitType: '',
            waistType: '',

            // priceValue : '',
        }
        this.handleChange = this.handleChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);
    };

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        // forState = event
        this.setState ({
            [name]: value
        })
    };

    sendFetch(iteam) {
        fetch('http://localhost:8000/posts').then(async (result) => {
            console.log(await result.json());
            let post = {iteam}
            
            let response = await fetch('http://localhost:8000/posts', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(post)
            });
            
            let res = await response.json();
        })
    }



    
    render() {




        const sizeFilter = (
            <div>
                <label htmlFor="size">Size</label>
                    <select id="size"
                    value={this.state.size} 
                    onChange={this.handleChange} 
                    name="size">
                        
                        <option value="" className="empty-option"></option>
                        <option value="xxs">xxs</option>
                        <option value="xs">xs</option>
                        <option value="s">s</option>
                        <option value="m">m</option>
                        <option value="l">l</option>
                        <option value="xl">xl</option>
                        <option value="xxl">xxl</option>

                    </select>
            </div>
        );
        const colorFilter = (
            <div>
                <label htmlFor="color"> Color </label>
                    <select id="color"
                    value={this.state.color} 
                    onChange={this.handleChange} 
                    name="color">
                       
                       <option value="" className="empty-option"></option>
                        <option value="brown">Brown</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="yellow">Yellow</option>
                        <option value="white">White</option>
                        <option value="black">Black</option>
                    
                    </select>
            </div>
        )
        const lengthFilter = (
            <div>
                <label htmlFor="length"> Length </label>

                    <select id="length"
                    value={this.state.length} 
                    onChange={this.handleChange} 
                    name="length">

                        <option value="" className="empty-option"></option>
                        <option value="regular">Regular</option>
                        <option value="short">Short</option>
                    
                    </select>
            </div>
        )
        const shoesType = (
            <div>
                <label htmlFor="shoesType">Type Shoes </label>
                    <select id="shoesType"
                    value={this.state.shoesType} 
                    onChange={this.handleChange} 
                    name="shoesType">

                        <option value="" className="empty-option"></option>
                        <option value="slippers">Slippers</option>
                        <option value="snickers">Snickers</option>
                        <option value="boots">Boots</option>
                        <option value="sandals">Sandals</option>
                        <option value="oxfords">Oxford</option>
                    
                    </select>
            </div>
        )
        const fitFilter = (
            <div>
                <label htmlFor="fitType">Fit type </label>
                    <select id="fitType"
                     value={this.state.fitShoes} 
                     onChange={this.handleChange} 
                     name="fitType">

                        <option value="" className="empty-option"></option>
                        <option value="skinny">Skinny</option>
                        <option value="regular">Regular</option>
                        <option value="straight">Straight</option>
                        <option value="loose">Loose</option>

                    </select>
            </div>
        )

        const waistFilter = (
            <div>
                <label htmlFor="waistType"> Waist Type </label>
                <select id="waistType" 
                value={this.state.waistType} 
                onChange={this.handleChange} 
                name="waistType" >

                    <option value="" className="empty-option"></option>
                    <option value="low">Low</option>
                    <option value="mid">Mid</option>
                    <option value="high">High</option>

                </select>
            </div>
        )




        const forDress = (
            <>
                {sizeFilter}
                {colorFilter}
                {lengthFilter}
            </>
        );
        const forJacket = (
            <>
                {colorFilter}
                {sizeFilter}
                {lengthFilter}
            </>
        )
        const forJeans = (
            <>
                {colorFilter}
                {fitFilter}
                {waistFilter} 
                {sizeFilter}
            </>
        )
        const forShirt = (
            <>
                {colorFilter}
                {sizeFilter}
            </>
        )
        const forShoes = (
            <>
                {colorFilter}
                {shoesType}
            </>
        )
        let checking = this.state.category;
        let build;
        
        const categoryName = {
            jeans: 'Jeans',
            dresses: 'Dresses',
            jacket: 'Jacket',
            shirt: 'Shirt',
            shoes: 'Shoes',

        }
        
        



        if( checking=="Jeans") {
            build = <div>{forJeans}</div>;
        } 
        switch(checking) {
            case categoryName.jeans:
                build = <>{forJeans}</>
                break;
            case categoryName.dresses:
                build = <>{forDress}</>
                break;
            case categoryName.jacket:
                build = <>{forJacket}</>
                break;
            case categoryName.shirt:
                build = <>{forShirt}</>
                break;
            case categoryName.shoes:
                build = <>{forShoes}</>
                break;
        };




        




        return (
            <div className="page-to-add-iteam">
               
                <div className="for-add-iteam">
                    <div className="close-page-to-add">
                        <Link to="/">
                        <button>
                            <img  src={Cross}/>
                        </button>
                        </Link>
                    </div>
                    <div className="conteiner-list">
                        <div> <h3>Add chrackteristick</h3></div>
                        <div className="list">  

                            <div>
                                <label htmlFor="header">Header</label>
                                <input id="header"
                                 type="text" 
                                 value={this.state.header} 
                                 name="header" 
                                 onChange={this.handleChange} />
                            </div>

                            <div>
                                <label htmlFor="linkTo"> Link to </label>
                                    <input id="linkTo"
                                    type="text"
                                    value={this.state.linkTo}
                                    onChange={this.handleChange}
                                    name="linkTo"  />
                                
                            </div>

                            <div>
                                <label htmlFor="price">Price </label>
                                    <input id="price"
                                    type="number"
                                    name="price"
                                    onChange={this.handleChange}
                                    value={this.state.price}/>
                                
                            </div>
                            
                            
            
                            <div>
                                <label> Select category:
                                    <select required="required" className="orange" value={this.state.category} onChange={this.handleChange} name="category">
                                        <option className="empty-option"></option>
                                        <option value={categoryName.jeans}>{categoryName.jeans}</option>
                                        <option value={categoryName.dresses}>{categoryName.dresses}</option>
                                        <option value={categoryName.shirt}>{categoryName.shirt}</option>
                                        <option value={categoryName.shoes}>{categoryName.shoes}</option>
                                        <option value={categoryName.jacket}>{categoryName.jacket}</option>
                                    </select>
                                </label>
                            </div>
                            {build}
                            
                        </div>
                        <div>
                            <button onClick={() => this.sendFetch(this.state)} >Send</button></div>
                    </div>
                </div>
            </div>
        )
    }
}
{/* <input type="text" value={this.props.price.nr} onChange={(nr) => this.props.changePrice(nr)}/>   */}

const mapStateToProps = (state) => {
   return { 
       price: state.addPrice
   };
};

const mapDispatchsToProps = (dispatch) => {
    return {
        changePrice: (nr) => dispatch({ 
            
            type : actionsType.ADDITEAMPRICE,
            payload: nr,
        }),
        sendIteam: (obj) => dispatch({
            type: actionsType.ADDITEAM,
            obj
        })
        
    };
    // actions.addPrice
    
};




export default connect(mapStateToProps, mapDispatchsToProps)(AddIteam);