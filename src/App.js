import { useLocation, Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import BuyCard from "./pages/BuyCard";
import Home from './pages/Home'
import ProductPage from "./pages/ProductPage";




function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route
         exact
          path="/"
          element={
              <Home />
          }
        />
        <Route
         exact
          path="/terms-conditions"
          element={
              <Home />
          }
        />
         <Route
         exact
          path="/provider-terms-conditions"
          element={
              <Home />
          }
        />
       <Route
         exact
          path="products"
          element={
              <ProductPage />
          }
        />
        <Route
         exact
          path="/blog"
          element={
              <Home />
          }
        />
        <Route
         exact
          path="/products/details/:id"
          element={
              <BuyCard />
          }
        />
    <Route exact path="*" element={<Home />} status={404}/>
    </Routes>
</BrowserRouter>
  )
}

export default App;
