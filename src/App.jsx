
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import ProdeuctList from "./pages/ProdeuctList"
import ProductDetail from "./pages/ProductDetail"
import ShoppingCart from "./pages/ShoppingCart"
import RootLayout from "./pages/RootLayout"
import PageNotFound from "./pages/PageNotFound"
import ProductListError from "./components/ProductListEroor"


const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ProductListError />}>
        <Route index element={<ProdeuctList />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="product/:productId" element={<ProductDetail />} />

        <Route path="*" element={<PageNotFound />} />

    </Route>
  )
)

function App() {

  return (
    <CartProvider>
      {/* <ProdeuctList />
      <ShoppingCart />
      <ProductDetail /> */}
      <RouterProvider router={router} />

    </CartProvider>
  )
}

export default App
