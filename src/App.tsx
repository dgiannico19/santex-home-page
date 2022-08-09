import { Header } from './components/header/Header';
import { ProductList } from './components/products-list/ProductList';
import CartContext from './context/CartContext';

function App() {
  
  
  return (
    <>
      <CartContext>
        <Header />
        <ProductList />
      </CartContext>
    </>
  );
}

export default App;
