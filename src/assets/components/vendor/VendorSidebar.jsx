import React, { useState } from "react";

import { Link, Outlet } from "react-router-dom";
import { VendorNavbar } from "./vendorNavbar";

export const VendorSidebar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        console.log("toggleSidebar");
        setSidebarOpen((prev) => !prev);
    };
    return (
        <>
            <VendorNavbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}></VendorNavbar>
            <aside
                className={`app-sidebar bg-body-secondary shadow ${isSidebarOpen ? "open" : "d-none"}`}
                data-bs-theme="dark"
            >
                <div className="sidebar-brand">
                    {/*begin::Brand Link*/}
                    <a href="./index.html" className="brand-link">
                        {/*begin::Brand Image*/}
                        <img
                        // src="../../dist/assets/img/AdminLTELogo.png"

                        />
                        {/*end::Brand Image*/}
                        {/*begin::Brand Text*/}
                        <span className="brand-text fw-light">B2B Connection</span>
                        {/*end::Brand Text*/}
                    </a>
                    {/*end::Brand Link*/}
                </div>

                <div
                    className=""
                    data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"
                    tabIndex={-1}
                    style={{
                        marginRight: "-16px",
                        marginBottom: "-16px",
                        marginLeft: 0,
                        top: "-8px",
                        right: "auto",
                        left: "-8px",
                        width: "calc(100% + 16px)",
                        padding: 8,
                    }}
                >
                    <nav className="mt-2">
                        {/*begin::Sidebar Menu*/}
                        <ul
                            className="nav sidebar-menu flex-column"
                            data-lte-toggle="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            <li className="nav-item menu-open">
                                <Link to="addproduct" className="nav-link active">
                                    <i className="nav-icon bi bi-speedometer" />
                                    <p>
                                        ADD PRODUCT
                                        <i className="nav-arrow bi bi-chevron-right" />
                                    </p>
                                </Link>
                                {/* <Link to="updateproduct" className="nav-link active">
                                    <i className="nav-icon bi bi-speedometer" />
                                    <p>
                                        UPDATE PRODUCT
                                        <i className="nav-arrow bi bi-chevron-right" />
                                    </p>
                                </Link> */}
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="/vendor/viewproduct" className="nav-link active">
                                            <i className="nav-icon bi bi-circle" />
                                            <p>VIEW PRODUCT</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./index2.html" className="nav-link">
                                            <i className="nav-icon bi bi-circle" />
                                            <p>Dashboard v2</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./index3.html" className="nav-link">
                                            <i className="nav-icon bi bi-circle" />
                                            <p>Dashboard v3</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="./generate/theme.html" className="nav-link">
                                    <i className="nav-icon bi bi-palette" />
                                    <p>Theme Generate</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon bi bi-box-seam-fill" />
                                    <p>
                                        Widgets
                                        <i className="nav-arrow bi bi-chevron-right" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="./widgets/small-box.html" className="nav-link">
                                            <i className="nav-icon bi bi-circle" />
                                            <p>Small Box</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./widgets/info-box.html" className="nav-link">
                                            <i className="nav-icon bi bi-circle" />
                                            <p>info Box</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="./widgets/cards.html" className="nav-link">
                                            <i className="nav-icon bi bi-circle" />
                                            <p>Cards</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        {/*end::Sidebar Menu*/}
                    </nav>
                </div>
            </aside>
            <main className="app-main">
                <Outlet />
            </main>
        </>
    );
};