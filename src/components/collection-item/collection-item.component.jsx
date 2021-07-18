import React from 'react';
import './collection-item.styles.scss';

//This is a functional component
const CollectionItem = ({image, name, price, imageUrl}) => (
  <div className='collection-item'>
    <div 
    className='image'
    style={{
      backgroundImage: `url(${imageUrl}`
    }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
)

export default CollectionItem