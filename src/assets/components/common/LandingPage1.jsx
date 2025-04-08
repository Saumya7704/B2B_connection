import React from 'react'

// import "../../css/bootstrap.min.css"
// import "../../css/style.css"
// import "../../css/responsive.css"
// import "../../css/jquery.mCustomScrollbar.min.css"
// import "../../css/owl.carousel.min.css"
// import "../../css/owl.theme.default.min.css"

export const LandingPage1 = () => {
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "250px";
    };

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    };


    return (
        <div>
            <>
                {/* basic */}
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* mobile metas */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
                {/* site metas */}
                <meta name="keywords" content="" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                {/* bootstrap css */}
                <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />
                {/* style css */}
                <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
                {/* Responsive*/}
                <link rel="stylesheet" href="css/responsive.css" />
                {/* fevicon */}
                <link rel="icon" href="/assets/images/fevicon.png" type="image/gif" />
                {/* Scrollbar Custom CSS */}
                <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
                {/* Tweaks for older IEs*/}
                <link
                    rel="stylesheet"
                    href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css"
                />
                {/* fonts */}
                <link
                    href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap"
                    rel="stylesheet"
                />
                {/* owl stylesheets */}
                <link rel="stylesheet" href="css/owl.carousel.min.css" />
                <link rel="stylesheet" href="css/owl.theme.default.min.css" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css"
                    media="screen"
                />
                <link
                    href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css"
                    rel="stylesheet"
                    type="text/css"
                />
                {/* header section start */}
                <div className="header_section haeder_main">
                    <div className="container-fluid">
                        <nav className="navbar navbar-light bg-light justify-content-between">
                            <div id="mySidenav" className="sidenav">
                                <a href="#" className="closebtn" onClick={closeNav}>
                                    ×
                                </a>
                                <a href="index.html">Home</a>
                                <a href="computers.html">Computers</a>
                                <a href="mans_clothes.html">Mans Clothes</a>
                                <a href="womans_clothes.html">Womans Clothes</a>
                                <a href="contact.html">Contact</a>
                            </div>
                            <span
                                style={{ fontSize: 30, cursor: "pointer", color: "#fff" }}
                                onClick={openNav}
                            >
                                <img src="/assets/images/toggle-icon.png" />
                            </span>
                            <a className="navbar-brand" href="index.html">
                                <img src="/assets/images/logo.png" style={{ position: "absolute", height: "130px", left: "630px" }} />
                            </a>
                            <form className="form-inline ">
                                <div className="login_text">
                                    <ul>
                                        <li>
                                            <a href="/Login">
                                                <img src="/assets/images/user-icon.png" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/assets/images/trolly-icon.png" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/assets/images/search-icon.png" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </form>
                        </nav>
                    </div>
                </div>
                {/* header section end */}
                {/* banner section start */}
                <div className="banner_section layout_padding">
                    <div id="my_slider" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="row border_1">
                                        <div className="col-md-4">
                                            <div className="image_1">
                                                <img src="/assets/images/img-1.png" style={{ width: "100%" }} />
                                            </div>
                                        </div>
                                        <div className="col-md-4" style={{ position: "absolute", left: "560px" }}>
                                            <h1 className="banner_taital">Big Sale Offer</h1>
                                            <div className="buynow_bt active">
                                                <a href="#">Buy Now</a>
                                            </div>
                                            <div className="contact_bt">
                                                <a href="/user/Contact">Contact Us</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="image_2">
                                                {/* <img src="images/img-2.png" style={{ width: "100%" }} /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row border_1">
                                        <div className="col-md-4">
                                            <div className="image_1">
                                                <img src="/assets/images/img-1.png" style={{ width: "100%" }} />
                                            </div>
                                        </div>
                                        <div className="col-md-4" style={{ position: "absolute", left: "560px" }}>
                                            <h1 className="banner_taital">Big Sale Offer</h1>
                                            <div className="buynow_bt active">
                                                <a href="#">Buy Now</a>
                                            </div>
                                            <div className="contact_bt">
                                                <a href="contact.html">Contact Us</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="image_2">
                                                {/* <img src="images/img-2.png" style={{ width: "100%" }} /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row border_1">
                                        <div className="col-md-4">
                                            <div className="image_1">
                                                <img src="/assets/images/img-1.png" style={{ width: "100%" }} />
                                            </div>
                                        </div>
                                        <div className="col-md-4" style={{ position: "absolute", left: "550px" }}>
                                            <h1 className="banner_taital">Big Sale Offer</h1>
                                            <div className="buynow_bt active">
                                                <a href="#">Buy Now</a>
                                            </div>
                                            <div className="contact_bt">
                                                <a href="contact.html">Contact Us</a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="image_2">
                                                {/* <img src="images/img-2.png" style={{ width: "100%" }} /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#my_slider"
                            role="button"
                            data-bs-slide="prev"
                        >
                            <i className="fa fa-angle-left" />
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#my_slider"
                            role="button"
                            data-bs-slide="next"
                        >
                            <i className="fa fa-angle-right" />
                        </a>
                    </div>
                </div>
                {/* banner section end */}
                {/* catagary section start */}
                <div className="catagary_section layout_padding">
                    <div className="container">
                        <div className="catagary_main">
                            <div className="catagary_left">
                                <h2 className="categary_text">Category</h2>
                            </div>
                            <div className="catagary_right">
                                <div className="catagary_menu">
                                    <ul>
                                        <li>
                                            <a href="#">Man's Fashion</a>
                                        </li>
                                        <li>
                                            <a href="#">Woman Fashion</a>
                                        </li>
                                        <li>
                                            <a href="#">Children's Wear</a>
                                        </li>
                                        <li>
                                            <a href="#"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="catagary_section_2">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="box_man">
                                    <h3 className="mobile_text">Mobile</h3>
                                    <div className="mobile_img">
                                        <img src="/assets/images/mobile-img.png" />
                                    </div>
                                    <div className="cart_main">
                                        <div className="cart_bt">
                                            <a href="#">Add To Cart</a>
                                        </div>
                                        <h4 className="samsung_text">Samsung</h4>
                                        <h6 className="rate_text">
                                            <a href="#">$500</a>
                                        </h6>
                                        <h6 className="rate_text_1">$1000</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box_man">
                                    <h3 className="mobile_text">Watch</h3>
                                    <div className="watch_img">
                                        <img src="/assets/images/watch-img.png" />
                                    </div>
                                    <div className="cart_main">
                                        <div className="cart_bt">
                                            <a href="#">Add To Cart</a>
                                        </div>
                                        <h4 className="samsung_text">Samsung</h4>
                                        <h6 className="rate_text">
                                            <a href="#">$500</a>
                                        </h6>
                                        <h6 className="rate_text_1">$1000</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box_man">
                                    <h3 className="mobile_text">Camera</h3>
                                    <div className="camera_img">
                                        <img src="/assets/images/camera-img.png" />
                                    </div>
                                    <div className="cart_main">
                                        <div className="cart_bt">
                                            <a href="#">Add To Cart</a>
                                        </div>
                                        <h4 className="samsung_text">Samsung</h4>
                                        <h6 className="rate_text">
                                            <a href="#">$500</a>
                                        </h6>
                                        <h6 className="rate_text_1">$1000</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* catagary section end */}
                {/* computers section start */}
                <div className="computers_section layout_padding">
                    <div className="container">
                        <h1 className="computers_taital">Computers &amp; Laptop</h1>
                    </div>
                </div>
                <div className="computers_section_2">
                    <div className="container-fluid">
                        <div className="computer_main">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="computer_img">
                                        <img src="/assets/images/computer-img.png" />
                                    </div>
                                    <h4 className="computer_text">COMPUTER</h4>
                                    <div className="computer_text_main">
                                        <h4 className="dell_text">Samsung</h4>
                                        <h6 className="price_text">
                                            <a href="#">$500</a>
                                        </h6>
                                        <h6 className="price_text_1">
                                            <a href="#">$1000</a>
                                        </h6>
                                    </div>
                                    <div className="cart_bt_1">
                                        <a href="#">Add To Cart</a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="computer_img">
                                        <img src="/assets/images/laptop-img.png" />
                                    </div>
                                    <h4 className="computer_text">LAPTOP</h4>
                                    <div className="computer_text_main">
                                        <h4 className="dell_text">Dell</h4>
                                        <h6 className="price_text">
                                            <a href="#">$500</a>
                                        </h6>
                                        <h6 className="price_text_1">
                                            <a href="#">$1000</a>
                                        </h6>
                                    </div>
                                    <div className="cart_bt_1">
                                        <a href="#">Add To Cart</a>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="computer_img">
                                        <img src="/assets/images/mac-img.png" />
                                    </div>
                                    <h4 className="computer_text">macOS</h4>
                                    <div className="computer_text_main">
                                        <h4 className="dell_text">Apple</h4>
                                        <h6 className="price_text">
                                            <a href="#">$500</a>
                                        </h6>
                                        <h6 className="price_text_1">
                                            <a href="#">$1000</a>
                                        </h6>
                                    </div>
                                    <div className="cart_bt_1">
                                        <a href="#">Add To Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* computers section end */}
                {/* mans clothes section start */}
                <div className="mans_section layout_padding">
                    <div className="container">
                        <h1 className="computers_taital">Man’s clothes</h1>
                    </div>
                </div>
                <div className="mans_section_2">
                    <div className="container-fluid">
                        <div className="mans_main">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1 className="offer_text">Best Offer Every Man’s Iteams</h1>
                                    <p className="lorem_text">
                                        There are many variations of passages of Lorem Ipsum available,but
                                        the majority have
                                    </p>
                                    <div className="read_bt">
                                        <a href="#">Buy Now</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="image_3">
                                        <img src="/assets/images/img-3.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* mans clothes section end */}
                {/* womans clothes section start */}
                <div className="computers_section layout_padding">
                    <div className="container">
                        <h1 className="womans_taital">woman’s clothes</h1>
                        <div className="womans_section_2">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1 className="Get_offer_text">
                                        Get <br />
                                        offer Every Iteams
                                    </h1>
                                    <div className="read_bt">
                                        <a href="#">Buy Now</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="image_4">
                                        <img src="/assets/images/img-4.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* womans clothes section end */}
                {/* footer section start */}
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
                {/* footer section end */}
                {/* copyright section start */}
                <div className="copyright_section">
                    <div className="container">
                        <p className="copyright_text">
                            2025 B2B Wholesale Market Portal. All Rights Reserved.
                        </p>
                    </div>
                </div>
                {/* copyright section end */}
                {/* Javascript files*/}
                {/* sidebar */}
                {/* javascript */}
            </>
        </div>
    )
}
