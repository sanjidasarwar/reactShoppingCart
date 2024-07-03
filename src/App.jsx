
import { CartProvider } from "./context/CartContext"
import ProdeuctList from "./pages/ProdeuctList"
import ProductDetail from "./pages/ProductDetail"
import ShoppingCart from "./pages/ShoppingCart"


function App() {

  return (
    <CartProvider>
      <ProdeuctList />
      <ShoppingCart />
      <ProductDetail />
    </CartProvider>
  )
}

export default App
