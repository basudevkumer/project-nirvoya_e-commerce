import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./rootlayout/RootLayout";
import Home from "./pages/Home";
import Details from "./pages/Details";
import ProductShop from "./pages/ProductShop";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/shop" element={<ProductShop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
