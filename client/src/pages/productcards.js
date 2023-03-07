import React from 'react';

function ProductCard({ product }) {
  return (
    <div style={{ width: '300px', margin: '10px',marginRight: '200px' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
      <h2>{product.name}</h2>
      <p>Rs{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
