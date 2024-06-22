import React from 'react';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Store</h1>
      </header>
      <ProductList />
    </div>
  );
}

export default App;
