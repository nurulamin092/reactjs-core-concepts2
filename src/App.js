import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'laptop', price: 900000 },
    { name: 'phone', price: 55000 },
    { name: 'watch', price: 9000 },
    { name: 'tablet', price: 12000 },

  ];
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
    </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h2>Name:{props.name}</h2>
      <h3>Price:{props.price}</h3>
    </div>
  )
}

export default App;
