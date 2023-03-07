import React from 'react';
import ProductCard from './productcards';

function AgricultureProductsPage() {
  const products = [
    {
      id: 1,
      name: 'Organic Tomato Seeds',
      price: 5.99,
      image: 'https://thumbs.dreamstime.com/b/tomato-vector-flat-illustration-whole-halved-tomato-seeds-isolated-white-background-packaging-design-tomato-vector-flat-136015081.jpg',
    },
    {
      id: 2,
      name: 'Fertilizer for Vegetables',
      price: 9.99,
      image: 'https://cdn5.vectorstock.com/i/1000x1000/13/74/cartoon-fertilizer-vector-23481374.jpg',
    },
    {
        id: 2,
        name: 'Fertilizer for Vegetables',
        price: 9.99,
        image: 'https://cdn5.vectorstock.com/i/1000x1000/13/74/cartoon-fertilizer-vector-23481374.jpg',
      },
    {
      id: 3,
      name: 'Gardening Gloves',
      price: 4.99,
      image: 'https://thumbs.dreamstime.com/b/green-gloves-cartoon-style-isolated-white-background-illustration-194695703.jpg',
    },
    {
        id: 3,
        name: 'Gardening Gloves',
        price: 4.99,
        image: 'https://thumbs.dreamstime.com/b/green-gloves-cartoon-style-isolated-white-background-illustration-194695703.jpg',
      },
    // Add more products here
  ];

  return (
    <div>
      <h1>Agriculture Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AgricultureProductsPage;
