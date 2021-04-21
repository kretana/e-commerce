import React from 'react';

import '../collection-item/collection-item.style.scss'


const CollectionItem = ({id,name,price,imageUrl}) => (
    <div className="collection-item" >
        <div
            className='image'
            style={{ backgroundImage: `url (${imageUrl})` }}>
        </div>
        <div className="collection-footer" key={id} >
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>

    </div>
)
export default CollectionItem;