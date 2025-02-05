import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Hero from "./components/Hero/Hero.jsx";
import AboutUs from "./components/About/About.jsx";
import Layout from "./Layout.jsx";
// import Returnpolicy from "./components/Returnpolicy/Returnpolicy.jsx";
import Shipping from "./components/Shipping/Shipping.jsx";
import Contact from "./components/contact/Contact.jsx";
import ProductPage from "./components/ProductPage.jsx";
import CategoryFilterPage from "./components/CategoryFilterPage.jsx";
import NavbarFilter from "./components/NavbarFilter.jsx";
import FindProduct from "./components/FindProduct.jsx";
import Protected from "./components/Protected.jsx";
import Cart from "./components/Cart.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
import SignInSignUpModal from "./components/SignInSignUpModal.jsx";
import Checkout from "./components/Checkout.jsx";
import YourOrder from "./components/YourOrder.jsx";
import PaymentSuccess from "./components/PaymentSuccess.jsx";
import AdminApp from "./AdminApp.jsx";
import AdminProtected from "./dashboard/AdminProtected.jsx";
import DashboardShow from "./dashboard/DashboardShow.jsx";
import Category from "./dashboard/Category.jsx";
import Users from "./dashboard/Users.jsx";
import AddCategory from "./dashboard/AddCategory.jsx";
import AddSubCategory from "./dashboard/AddSubCategory.jsx";
import SubCategory from "./dashboard/SubCategory.jsx";
import Product from "./dashboard/Product.jsx";
import AddProduct from "./dashboard/AddProduct.jsx";
import ViewProduct from "./dashboard/ViewProduct.jsx";
import UpdateProduct from "./dashboard/UpdateProduct.jsx";
import Banner from "./dashboard/Banner.jsx";
import AddBanner from "./dashboard/AddBanner.jsx";
import Orders from "./dashboard/Orders.jsx";
import AdminLogin from "./dashboard/AdminLogin.jsx";
import About from "./components/About/About.jsx";
import Privacy from "./components/termand Privacy/Privacy.jsx";
import Terms from "./components/termand Privacy/Terms.jsx";
import Return from "./components/Shipping/Return.jsx";
import Wishlist from "./components/Wishlist.jsx";
import AddPopup from "./dashboard/AddPopup.jsx";
import EditPopup from "./dashboard/EditPopup.jsx";

import ServiceRequest from "./components/ServiceRequest.jsx";
import TVProducts from "./components/TVproducts.jsx";
import AirCooler from "./components/AirCooler.jsx";
import Mixergrinder from "./components/Mixergrinder.jsx";
import Career from "./components/Career.jsx";
import Office from "./components/Office.jsx";
import Distributer from "./components/Distributer.jsx";
import Directdealer from "./components/Directdealer.jsx";
import BlogMore from "./components/BlogMore.jsx";


let router = createBrowserRouter(
  createRoutesFromElements(
    <>
    {/* <Route path="/" element={<App/>}/>
    <Route path="/about" element={<AboutUs/>}/>
    <Route path="/return" element={<Returnpolicy/>}/>
    <Route path="/shipping" element={<Shipping/>}/>
    <Route path="/contact" element={<Contact/>}/> */}
    

        <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        <Route path='/productpage/:code' element={<ProductPage/>}/>
        <Route path='/view/:categoryName/:subcategoryName' element={<CategoryFilterPage/>}/>
        <Route path='/view/:categoryName' element={<NavbarFilter/>}/>
        <Route path='/find/:inp' element={<FindProduct/>}/>
        <Route path='/cart' element={<Protected>
          <Cart/>
        </Protected>}/>
        <Route path='/signinsignup' element={<SignInSignUpModal/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/yourorder' element={<YourOrder/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/payment_seccess' element={<PaymentSuccess/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route  path="/shipping" element={<Shipping/>}/>
        <Route path="/return" element={<Return/>}/>
       
        <Route path="/servicerequest" element={<ServiceRequest/>}/>
        <Route path="/tvproducts" element={<TVProducts/>}/>
        <Route path="/aircooler" element={<AirCooler/>}/>
        <Route path="/mixergrinder" element={<Mixergrinder/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/office" element={<Office/>}/>
        <Route path="/distributer" element={<Distributer/>}/>
        <Route path="/directdealer" element={<Directdealer/>}/>
        <Route path="/blogmore" element={<BlogMore/>}/>
       
        </Route>

    <Route path='/admin' element={<AdminApp/>}>
    <Route path='/admin' element={<AdminProtected><DashboardShow/></AdminProtected>}/>
    <Route path='/admin/category' element={<Category/>}/>
    <Route path='/admin/users' element={<Users/>}/>
    <Route path='/admin/newcategory' element={<AddCategory/>}/>
    <Route path='/admin/newsubcategory' element={<AddSubCategory/>}/>
    <Route path='/admin/subcategory' element={<SubCategory/>}/>
    <Route path='/admin/product' element={<Product/>}/>
    <Route path='/admin/newproduct' element={<AddProduct/>}/>
    <Route path='/admin/view/:id' element={<ViewProduct/>}/>
    <Route path='/admin/update/:id' element={<UpdateProduct/>}/>
    <Route path='/admin/banner' element={<Banner/>}/>
    <Route path='/admin/newbanner' element={<AddBanner/>}/>
    <Route path='/admin/orders' element={<Orders/>}/>
    <Route path='/admin/adminlogin' element={<AdminLogin/>}/>
    <Route path='/admin/popup' element={<AddPopup/>}/>
    <Route path='/admin/editpopup/:id' element={<EditPopup/>}/>
    </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
