import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import "./assets/css/adminlte.css"
import "./assets/css/adminlte.min.css"
import { Route, Routes, useLocation } from 'react-router-dom'
import { UserSidebar } from './assets/components/layout/UserSidebar'
import { Signup } from './assets/components/common/signup'
import { Login } from './assets/components/common/login'
import axios from 'axios'
// import { VendorSidebar } from './assets/components/vendor/VendorSidebar'
import { VendorSidebar } from './assets/components/vendor/vendorSidebar'
import { AddProduct } from './assets/components/vendor/AddProduct'
import { AddProductWithFile } from './assets/components/vendor/AddProductWithFile'
import PrivateRoutes from './assets/components/hooks/PrivateRoutes'
import LandingPage from "./assets/components/common/LandingPage"


function App() {
  axios.defaults.baseURL = "http://localhost:3000"
  // const [count, setCount] = useState(0)

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
        <Route path='/' element={<LandingPage />}></Route>

        <Route element={<PrivateRoutes />}>

          {/* <Route path='/admin' element={<h1>Admin COMPONENT</h1>}></Route> */}

          <Route path='/vendor' element={<VendorSidebar />}>
            <Route path='addproduct' element={<AddProduct />} />
            <Route path='addproductwithfile' element={<AddProductWithFile />} />
          </Route>

          <Route path='/user' element={<UserSidebar />}>
          </Route>
        </Route>
      </Routes>
    </div >

  )
}

export default App