import React from 'react';
import  '../prewiev-collection/prewiev.collection.style.scss';
import CollectionItem from '../collection-item/collection-item.component.jsx';

const PrewievCollection = ({title,items}) =>(
<div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
        {
            items.filter(( item,indx)=>indx<4)
            .map(({id,name,price,imageUrl}) =>(
                <CollectionItem key={id} name={name} price={price} imageUrl={imageUrl} />
            ))}
    </div>
</div>

)




export default PrewievCollection;

