import { Badge, Typography } from '@mui/joy';
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const UserNavbar = () => {

    const state = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const onLogout = () => {
        // Clear authentication (modify as needed)
        localStorage.removeItem('id'); // Example: Remove token from storage

        // Redirect to login page
        navigate('/Login');
    };

    return (

        <nav className="app-header navbar navbar-expand bg-body" data-bs-theme="dark">
            {/*begin::Container*/}
            <div className="container-fluid">
                {/*begin::Start Navbar Links*/}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            data-lte-toggle="sidebar"
                            href="#"
                            role="button"
                        >
                            <i className="bi bi-list" />
                        </a>
                    </li>
                    <li className="nav-item d-none d-md-block">
                        <a href="/user/homepage" className="nav-link">
                            Home
                        </a>
                    </li>
                    <li className="nav-item d-none d-md-block">
                        <a href="#" className="nav-link">
                            Contact
                        </a>
                    </li>
                    <li className="nav-item d-none d-md-block">
                        <a href="#" className="nav-link">
                            Admin
                        </a>
                    </li>
                    <li className="nav-item d-none d-md-block">
                        <a href="#" className="nav-link">
                            User
                        </a>
                    </li>
                    <li className="nav-item d-none d-md-block">
                        <a href="products" className="nav-link">
                            Proucts
                        </a>
                    </li>
                </ul>
                {/*end::Start Navbar Links*/}
                {/*begin::End Navbar Links*/}
                <ul className="navbar-nav ms-auto">

                    {/*begin::User Menu Dropdown*/}
                    <li className="nav-item dropdown user-menu">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                        >
                            {/* <a style={{ color: "gray" }} href='Login'> Login | </a> */}
                            {/* <a style={{ color: "gray" }} href='Signup'> Signup </a> */}


                        </a>
                        {/* Logout Button */}
                        <li className="nav-item">
                            <button className="btn btn-danger ms-3" onClick={onLogout}>Logout</button>
                        </li>
                        <div className="login_text" style={{ color: "gray", position: "relative" }} >
                            <ul>
                                <li>
                                    <a href="/Login" style={{ color: "gray" }}>
                                        <img src="/assets/images/user-icon.png" style={{ color: "gray", position: "relative" }} />
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/user/cartview">
                                        <Badge style={{ right: "5px" }} badgeContent={state.cart?.length} >
                                            <Typography sx={{ fontSize: 'x1' }} >🛒 </Typography>
                                        </Badge>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="/assets/images/search-icon.png" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                        </ul>
                    </li>
                    {/*end::User Menu Dropdown*/}
                </ul>
                {/*end::End Navbar Links*/}
            </div>
            {/*end::Container*/}
        </nav>

    )
}