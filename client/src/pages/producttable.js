import React from 'react';
// import ProductCard from './ProductCard';
import './producttable.css';

function Producttable() {
  const farmers = [
    {
      id: 1,
      name: 'John Smith',
      products: [
        { id: 1, name: 'Organic Tomato Seeds', price: 5.99 },
        { id: 2, name: 'Organic Cucumber Seeds', price: 6.99 },
        { id: 3, name: 'Organic Basil Seeds', price: 4.99 },
      ],
    },
    {
      id: 2,
      name: 'Jane Doe',
      products: [
        { id: 4, name: 'Fertilizer for Vegetables', price: 9.99 },
        { id: 5, name: 'Fertilizer for Fruits', price: 10.99 },
      ],
    },
    {
      id: 3,
      name: 'Bob Johnson',
      products: [
        { id: 6, name: 'Gardening Gloves', price: 4.99 },
        { id: 7, name: 'Garden Pruners', price: 12.99 },
        { id: 8, name: 'Garden Shears', price: 9.99 },
      ],
    },
    // Add more farmers here
  ];

  return (
    <div className="agriculture-products-page">
      <table className="farmer-products-table">
        <thead>
          <tr>
            <th>Farmer Name</th>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {farmers.map((farmer) => (
            farmer.products.map((product) => (
              <tr key={product.id}>
                {farmer.products.indexOf(product) === 0 &&
                  <td rowSpan={farmer.products.length}>{farmer.name}</td>
                }
                <td>{product.name}</td>
                <td>${product.price.toFixed(2)}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Producttable;
