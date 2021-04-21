import React from 'react';
import  '../prewiev-collection/prewiev.collection.style.scss';
import CollectionItem from '../collection-item/collection-item.component.jsx';

const PrewievCollection = ({title,items}) =>(
<div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
        {
            items.filter(( _item,indx)=>indx<4)
            .map(({id, ...otherItemProps}) =>(
                <CollectionItem key={id} {...otherItemProps} />
            ))}
    </div>
</div>

)




export default PrewievCollection;

