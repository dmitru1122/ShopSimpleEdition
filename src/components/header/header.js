import React, { Fragment } from 'react';
import CartLogo from '../images/cart.svg';
import Counter from '../images/counter.svg';
import Logo from '../images/logo.svg';
import IconToShow from '../images/icon/trigonShow.png';
import IconToHide from '../images/icon/trigonHide.png';
import AccountLogo from '../images/icon/account.png';




import * as actions from '../../redux/actions/index';
import {useSelector, useDispatch } from 'react-redux';



import {Link} from 'react-router-dom';

import './header.css';



class HeaderLeftPart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            manVisibility: false,
            womanVisibility: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            [e]: !this.state[e],
        });
    }
    render() {
        const listMan= (

            <div className="header-list-filter">
                    <Link to="/catalog/forJeans"><div>Jeans</div></Link> 
                    <Link to="/catalog/forJacket"><div>Jacket</div></Link>
                    <Link to="/catalog/forShirt"><div>Shirt</div></Link>
                    <Link to="/catalog/forShoes"><div>Shoes</div></Link>
            </div>

        );
        
        const listWoman = (
                <div className="header-list-filter">
                    <Link to="/catalog/forJeans"><div>Jeans</div></Link> 
                    <Link to="/catalog/forJacket"><div>Jacket</div></Link>
                    <Link to="/catalog/forDresses"><div>Dress</div></Link>
                    <Link to="/catalog/forShoes"><div>Shoes</div></Link>
                </div>

        )

        const checkMan = (this.state.manVisibility)?(listMan):(null);
        const checkWoman = (this.state.womanVisibility)?(listWoman):(null)
        
        const show = <img className="icon-show-hide" src={IconToShow} title="show list" />;
        const hide = <img className="icon-show-hide" src={IconToHide} title="show list" />;
        const ImageWoman = (this.state.womanVisibility)?(hide):(show);
        const ImageMan = (this.state.manVisibility)?(hide):(show);





        return (
            <div className="header-left-part-conteiner">
                <div className="cursor-pointer" onClick={
                    () => this.handleClick('manVisibility')
                    } >For Men {ImageMan} <div>{checkMan}</div></div>

                <div className="cursor-pointer" onClick={
                    () => this.handleClick('womanVisibility')
                    } >For Women {ImageWoman}<div>{checkWoman}</div></div>
                {/* if future instead it i must use chlid.function and it's element will be class */}
            </div>
        )
    }
}









function HeaderLogo() {
    return( 
        <div className="header-logo-conteiner text1-7 to-main-page"  title="To main page">
            <Link to="/"> 
                <img src={Logo} title="Logo" alt="Vab.logo"/> 
                <span style={{paddingLeft: '0.5em'}}>Vab</span>
            </Link>
        </div>
        
    )
}











function Delivery(props) {
    return(
        <div className="delivery-conteiner">
            <div className="delivery-block"><a href="" >Delivery </a></div>
            <div className="delivery-block"><a href="">Payment</a></div>
        </div>
    )
}

function Cart (props) {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
    
    return(
        <div className="cart-conteiner">
            <div className="cart-block"><img src={CartLogo} /></div>
            <div className="cart-block" onClick={() => dispatch(actions.decrement(5))}><img src={Counter} />{counter}</div>
        </div>
    )
}
class ToAccount extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="to-account">
                <Link to="/catalog/addIteam">
                <img src={AccountLogo} />
                </Link>
            </div>
        )
    }
}
function HeaderRightPart() {
    return(
        <div className="header-right-part-conteiner">
            <Delivery />
            <Cart />
            <ToAccount />
        </div>
    )
}








function Header (props) {
    return(
        <nav className={props.styleClass}>
            <div className="header content">
                <HeaderLeftPart />
                <HeaderLogo />
                <HeaderRightPart />
            </div>
        </nav>
    )
}

export default Header;