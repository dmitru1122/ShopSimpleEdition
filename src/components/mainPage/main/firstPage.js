import React from 'react';
// import SeconalSale from '../smollComponents/';
import buttonSaleCollection from '../../smollComponents/buttons/buttonSaleCollection';
import ButtonSale from '../../smollComponents/buttons/buttonSaleCollection';
// import SaleImage from '../images/shoes/saleHead.png'
import lp from '../../images/shoes/onSale600.png';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../../redux/actions/index';

function LeftBlock(props) {
    return (
        <div className='fp-main-left-block flex-2-1-block' >
            <div className="text1-7">Winter sale</div>
            <div><span className="header-sale">Sale up to 90%</span></div>
            <div><ButtonSale /></div>
            
        </div>
    )
}

function RightBlock(props) {
    let oldPrice = '100';
    let price = '80 P';
    return (
        <div className='fp-main-right-block flex-2-1-block background-image'>
            <div className="old-price text1-7">{oldPrice}</div>
            <div className="new-price">{price}</div>
            {/* <div><img src={lp} /></div> */}
        </div>
    )
}

function MainBlock() {
    let classProperty = 'flex-2-1-block' ;
    return (
        <div className="first-page-main ">
            <LeftBlock  classProperty={classProperty}/>
            <RightBlock  classProperty={classProperty} />
        </div>
    );
}


function FooterInformation() {
    const dispatch = useDispatch();
    const counter = useSelector(store => store.counter);
    return (
        <div className="first-page-footer-conteiner">
            <div onClick={() => dispatch(actions.increment(2))}>+2</div>
            <div>left2</div>
            <div>left3</div>
            <div>left4</div>
        </div>
    )
}
function FirstPage (props) {
    return(
        <div className={props.styleClass} >
            <article className="first-page content">
                <MainBlock />
                <FooterInformation />
            </article>
        </div>
    )
}

export default FirstPage;