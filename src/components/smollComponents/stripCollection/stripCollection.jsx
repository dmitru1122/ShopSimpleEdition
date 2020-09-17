import React from 'react';
import TradePosition from '../iteams/tradePosition';
import './stripCollection.css';


class StripWithHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minPrice : 10,
            price: parseInt(this.props.collection.price)
        }
    }

    render() {
        // const header = this.props.header;
        let collection = this.props.collection;
        // console.log(collection[1].price);
        // console.log(typeof(this.props.Object.keyscollection));
        // const list = Object.keys(collection).map((number) => 
        // <>
        // {console.log(this.props.collection[number].id)}
        
        //     <TradePosition key={this.props.collection[number].id}  element={collection[number]}/>
        // </>
        // )

        const list = collection.map(function (iteam) {
            return (
                <TradePosition key={iteam.id}  element={iteam}/>
            );
        });
       
        return (

            <article className='strip'>
                <div className='strip__header'>{this.props.header}</div>
                    <div className='strip__content'>
                     {list}
                    </div>
            </article>
        )
    }
}


export default StripWithHeader;