import React from 'react'




export const Contact = () => {
    return (

        <>
            {/* basic */}
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* mobile metas */}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
            {/* site metas */}
            <title>Contact</title>
            <meta name="keywords" content="" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            {/* bootstrap css */}
            <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css" />
            {/* style css */}
            <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />
            {/* Responsive*/}
            <link rel="stylesheet" href="/assets/css/responsive.css" />
            {/* fevicon */}
            <link rel="icon" href="assets/images/fevicon.png" type="/assets/image/gif" />
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
                            <a
                                href="javascript:void(0)"
                                className="closebtn"
                                onclick="closeNav()"
                            >
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
                            onclick="openNav()"
                        >
                            {/* <img src="/assets/images/toggle-icon.png" /> */}
                        </span>
                        <a className="navbar-brand" href="index.html">
                            <img src="/assets/images/logo.png" />
                        </a>
                        <form className="form-inline ">
                            <div className="login_text">
                                <ul>
                                    <li>
                                        <a href="#">
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
            {/* contact section start */}
            <div className="contact_section layout_padding">
                <div className="container">
                    <h1 className="contact_taital">Contact Us</h1>
                    <div className="contact_section_2">
                        <div className="mail_section_1">
                            <input
                                type="text"
                                className="mail_text"
                                placeholder="Name"
                                name="text"
                            />
                            <input
                                type="text"
                                className="mail_text"
                                placeholder="Email"
                                name="text"
                            />
                            <input
                                type="text"
                                className="mail_text"
                                placeholder="Phone Number"
                                name="text"
                            />
                            <textarea
                                className="massage-bt"
                                placeholder="Massage"
                                rows={5}
                                id="comment"
                                name="Massage"
                                defaultValue={""}
                            />
                            <div className="send_bt">
                                <a href="#">Send</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact section end */}
            {/* footer section start */}
            <div className="footer_section layout_padding margin_top_90">
                <div className="container">
                    <div className="footer_logo_main">
                        <div className="footer_logo">
                            <a href="index.html">
                                <img src="/assets/images/footer-logo.png" />
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
                                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                    nostrud exercitation u
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
                            <div className="col-lg-3 col-sm-6">
                                <h4 className="adderss_text">Useful Link</h4>
                                <div className="footer_menu">
                                    <ul>
                                        <li>
                                            <a href="#">Adipiscing</a>
                                        </li>
                                        <li>
                                            <a href="#">Elit, sed do</a>
                                        </li>
                                        <li>
                                            <a href="#">Eiusmod</a>
                                        </li>
                                        <li>
                                            <a href="#">Tempor</a>
                                        </li>
                                        <li>
                                            <a href="#">incididunt</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
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
                                        <a href="#">+7586656566</a>
                                    </span>
                                </div>
                                <div className="call_text">
                                    <img src="/assets/images/mail-icon.png" />
                                    <span className="paddlin_left_0">
                                        <a href="#">volim@gmail.com</a>
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
                        2020 All Rights Reserved. Design by{" "}
                        <a href="https://html.design">Free html Templates</a>
                    </p>
                </div>
            </div>
            {/* copyright section end */}
            {/* Javascript files*/}
            {/* sidebar */}
            {/* javascript */}


        </>

    )
}
