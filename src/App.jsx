
import { CartProvider } from "./context/CartContext"
import ProdeuctList from "./pages/ProdeuctList"
import ShoppingCart from "./pages/ShoppingCart"


function App() {

  return (
    <CartProvider>
      <ProdeuctList />
      {/* <ShoppingCart /> */}
    </CartProvider>
  )
}

export default App
