import React from 'react';
import SHOP_DATA from '../shop/shop.data';
import PrewievCollection from '../components/prewiev-collection/prewiev.collection.component.jsx';


class ShopPage extends  React.Component{
constructor(props){
    super(props);

    this.state = {
        collections: SHOP_DATA
    }
}


render(){
    const {collections}= this.state;
    return (
        <div className= 'shop-page'>
         {
          collections.map(({id, ...otherCollectionProps}) =>(
              <PrewievCollection key= {id} {...otherCollectionProps}/>
          ))
         }
        </div>
    )
}
}

export default ShopPage