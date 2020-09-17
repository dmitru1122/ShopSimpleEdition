import React from 'react';

function SecondPage(props) {
    return(
        <div className={props.styleClass}>
            <article className="second-page content">
                <div className="sp-head">Free delivery</div>
                <div className="sp-description">Sell and take gift</div>
            </article>
        </div>
    )
}


export default SecondPage;