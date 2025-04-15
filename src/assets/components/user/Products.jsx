// import { Button } from 'bootstrap'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { addToCart } from '../redux/CartSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../../redux/CartSlice';

export const Products = () => {
    const Navigate = useNavigate()
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('/product/getAllProducts') // Adjust endpoint as needed
            .then(res => {
                setProducts(res.data.data); // Access the 'data' array from the backend
            })
            .catch(err => {
                console.error("Error fetching products:", err);
            });
    }, []);

    return (
        <div>
            {/* basic */}
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            {/* mobile metas */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
            {/* site metas */}
            <title>cla</title>
            <meta name="keywords" content="" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            {/* bootstrap css */}
            <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
            {/* style css */}
            <link rel="stylesheet" href="/assets/css/style.css" />
            {/* Responsive*/}
            <link rel="stylesheet" href="/assets/css/responsive.css" />
            {/* fevicon */}
            <link rel="icon" href="/assets/images/fevicon.png" type="image/gif" />
            {/* Scrollbar Custom CSS */}
            <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
            {/* Tweaks for older IEs*/}
            <link
                rel="stylesheet"
                href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
                media="screen"
            />


            <div className="our-brand-section">
                <div className="container">
                    <div className="title-wrapper">
                        <h2>Our Products</h2>
                    </div>

                    <div className="row product-grid">
                        {products.map((product) => (

                            <div
                                className="col-md-4 col-lg-4 col-sm-6 mb-4"
                                key={product._id}
                                onClick={() => Navigate(`/products/${product._id}`)}
                                style={{ cursor: 'pointer' }}

                            >

                                <div className="product-card">
                                    <img
                                        src={product.productImageURL1}
                                        alt={product.name}
                                        className="img-fluid"
                                    />
                                    {/* Flex container for name and price */}
                                    <div className="product-info d-flex justify-content-between align-items-start mt-2">
                                        {/* Product name on the left */}
                                        <p className="product-name mb-0">{product.name}</p>

                                        {/* Prices on the right */}
                                        <div className="text-end">
                                            {product.offerPrice !== undefined &&
                                                product.offerPrice !== null &&
                                                product.offerPrice !== product.price ? (
                                                <>
                                                    <p className="mb-0" style={{ textDecoration: 'line-through', color: 'gray' }}>
                                                        Price: ${product.price}
                                                    </p>
                                                    <p className="mb-0 text-danger fw-bold">OfferPrice: ${product.offerPrice}</p>
                                                </>
                                            ) : (
                                                <p className="mb-0 fw-bold">Price: ${product.price}</p>
                                            )}
                                        </div>
                                    </div>


                                    {/* Stars and button */}
                                    <div className="stars mt-2">⭐⭐⭐⭐☆</div>
                                    <div className="add-to-cart mt-2">
                                        <button
                                            onClick={() => {
                                                dispatch(
                                                    addToCart({
                                                        id: product._id,
                                                        name: product.name,
                                                        price: product.price,
                                                        offerPrice: product.offerPrice,
                                                        categoryId: product.categoryId,
                                                        subCategoryId: product.subCategoryId,
                                                        productDetails: product.productDetails,
                                                    }));
                                            }}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-4">
                        <a href="#" className="see-more-btn">See More</a>
                    </div>

                </div>
            </div>
            {/*  footer */}
            <div className="footer_section layout_padding margin_top_90">
                <div className="container">
                    <div className="footer_logo_main">
                        <div className="footer_logo">
                            <a href="index.html">
                                <img src="/assets/images/logo.png" style={{ position: "absolute", height: "90px" }} />
                            </a>
                        </div>
                        <div className="social_icon">
                            <ul>
                                <li>
                                    <a href="#">
                                        <img src="/assets/images/fb-icon.png" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/assets/images/twitter-icon.png" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/assets/images/linkedin-icon.png" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/assets/images/instagram-icon.png" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/assets/images/youtub-icon.png" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_section_2">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <h4 className="adderss_text">About</h4>
                                <p className="ipsum_text">
                                    We connect buyers and sellers in the wholesale market, providing a seamless platform for efficient transactions and business growth.

                                </p>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <h4 className="adderss_text">Menu</h4>
                                <div className="footer_menu">
                                    <ul>
                                        <li>
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>
                                            <a href="computers.html">Computers</a>
                                        </li>
                                        <li>
                                            <a href="Mans_clothes.html">Mans Clothes</a>
                                        </li>
                                        <li>
                                            <a href="womans_clothes.html">Womans Clothes</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-sm-6" style={{ marginTop: "30px", left: "310px" }}>
                                <h4 className="adderss_text">Contact</h4>
                                <div className="call_text">
                                    <img src="/assets/images/map-icon.png" />
                                    <span className="paddlin_left_0">
                                        <a href="#">London 145 United Kingdom</a>
                                    </span>
                                </div>
                                <div className="call_text">
                                    <img src="/assets/images/call-icon.png" />
                                    <span className="paddlin_left_0">
                                        <a href="#">+91 9409270312</a>
                                    </span>
                                </div>
                                <div className="call_text">
                                    <img src="/assets/images/mail-icon.png" />
                                    <span className="paddlin_left_0">
                                        <a href="#">b2b@gmail.com</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
