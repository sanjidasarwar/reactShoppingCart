
import { CartProvider } from "./context/CartContext"
import ProdeuctList from "./pages/ProdeuctList"


function App() {

  return (
    <CartProvider>
      <ProdeuctList />
    </CartProvider>
  )
}

export default App
