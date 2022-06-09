import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import { useState } from 'react';

function App() {
  const [displayCart, setDisplayCart] = useState(false)

  function showDisplayCart() {
    setDisplayCart(true)
  }

  function hideDisplayCart() {
    setDisplayCart(false)
  }
  return (
    <CartProvider>
      <Header onShowCart={showDisplayCart}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
