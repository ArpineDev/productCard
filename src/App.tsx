import React from 'react';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import { PRODUCTS_MOCK } from './components/ProductsContainer/ProductsContainer.constants';

function App() {
  return (
    <div>
      <ProductsContainer products={PRODUCTS_MOCK} />
    </div>
  );
}

export default App;
