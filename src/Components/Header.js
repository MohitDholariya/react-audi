import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <>
                <div className="bg-menubar container-fluid py-2">
                    <div className="row py-2 d-flex">
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className=" ms-4 pt-1">
                                <img src="assets/img/audi.jpg" width="100px" alt=''></img>
                            </div>
                        </div>
                        <div className="col-lg-6   offcanvas-lg  offcanvas-end " tabindex="-1" id="offcanvasResponsive"
                            aria-labelledby="offcanvasResponsiveLabel">
                            <div className="offcanvas-header ">
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive"
                                    aria-label="Close"></button>
                            </div>
                            <ul className="nav text-white d-flex d-block d-lg-flex d-sm-block  offcanvas-body">
                                <li className="nav-item">
                                    <Link className="nav-link text-secondary" to="/"><span className="nav-hover">HOME</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-secondary" to="/service"><span className="nav-hover">SERVICE</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-secondary" to="/shop"><span className="nav-hover">STORE</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-secondary" to="/testdrive"><span className="nav-hover">TEST DRIVE</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-secondary" to="/booknow"><span className="nav-hover">BOOK NOW</span></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-8 col-sm-6 col-6 d-flex justify-content-end">
                            <div className="hide">
                                <img src="assets/img/apple.jpg" alt="" className="pe-2 logo-width"></img>
                                <img src="assets/img/google.jpg" alt="" className="pe-2 logo-width"></img>
                                <Link to="/login" className="mt-3 p-2 me-4 menu-button">Login / Register</Link>
                            </div>
                            <div className="d-flex justify-content-end d-block d-lg-none ">
                                <span className="material-symbols-outlined me-3 mt-3 text-white menu-ml"

                                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive"
                                    aria-controls="offcanvasResponsive">menu</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Header