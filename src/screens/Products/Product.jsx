import React from 'react';
import FilterableProductTable from './_componentes/FilterableProductTable';

const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' }
];

const Product = () => {
 

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Product List</h1>
      < FilterableProductTable products={PRODUCTS} />
    </div>
  );
};

export default Product;


   


