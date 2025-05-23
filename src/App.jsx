import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
//import './App.css'
import "./assets/css/adminlte.css";
import "./assets/css/adminlte.min.css";
import { Route, Routes, useLocation } from 'react-router-dom';
import { UserSidebar } from './assets/components/layout/UserSidebar';
import { Signup } from './assets/components/common/signup';
import { Login } from './assets/components/common/Login';
import axios from 'axios';
import { VendorSidebar } from './assets/components/vendor/vendorSidebar';
import { AddProduct } from './assets/components/vendor/AddProduct';
import { AddProductWithFile } from './assets/components/vendor/AddProductWithFile';
import PrivateRoutes from './assets/components/hooks/PrivateRoutes';
// import LandingPage from "./assets/components/common/LandingPage";
import { ResetPassword } from './assets/components/common/ResetPassword';
import ViewProduct from './assets/components/vendor/ViewProduct';
import UpdateProduct from './assets/components/vendor/UpdateProduct';
import DeleteProduct from './assets/components/vendor/DeleteProduct';
import { LandingPage1 } from './assets/components/common/LandingPage1';
import { Contact } from './assets/components/user/Contact';
import { Products } from './assets/components/user/Products';
import { CartViewStep } from './assets/components/user/CartViewStep';
import ProductDetails from './assets/components/user/ProductDetails';
import { ConfirmationStep } from './assets/components/user/ConfirmationStep';
import { ShippingStep } from './assets/components/user/ShippingStep';
import { Checkout } from './assets/components/user/Checkout';
import { AdminOrders } from './assets/components/admin/AdminOrders';

function App() {
  axios.defaults.baseURL = "http://localhost:3000";

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/Login" || location.pathname === "/Signup") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);

  return (
    <div className={location.pathname === "/Login" || location.pathname === "/Signup" ? "" : "app-wrapper"}>
      <Routes>
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
        {/* <Route path='*' element={<LandingPage />} /> */}




        <Route path='resetpassword/:token' element={<ResetPassword />} />

        <Route element={<PrivateRoutes />}>

          <Route path="/admin/orders" element={<AdminOrders />} />

          <Route path='/vendor' element={<VendorSidebar />}>
            <Route path='addproduct' element={<AddProduct />} />
            <Route path='addproductwithfile' element={<AddProductWithFile />} />
            <Route path='viewproduct' element={<ViewProduct />} />
            <Route path='updateproduct/:id' element={<UpdateProduct />} />
            <Route path='Deleteproduct' element={<DeleteProduct />} />
          </Route>

          <Route path="products/:id" element={<ProductDetails />} />


          <Route path='/user' element={<UserSidebar />}>
            <Route path='homepage' element={<LandingPage1 />} />
            <Route path='Contact' element={<Contact />} />
            <Route path="products" element={<Products />} />
            <Route path="cartview" element={<CartViewStep />} />

            <Route path="checkout" element={<Checkout />} />
            <Route path="shippingstep" element={<ShippingStep />} />
            <Route path="confirmationstep" element={<ConfirmationStep />} />


          </Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;