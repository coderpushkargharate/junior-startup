import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import "../components/header.css"
const Header = () => (
    <nav className="navbar navbar-expand-lg  header " >
        <div className="container-fluid px-5 py-2 header">
            <Link className="navbar-brand" to="/"><img src="public/homeimg/width_200.png" alt="" /></Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto  mb-lg-0 ">
                    <li className="nav-item">
                        <Link className="nav-link active me-4 navc text-white" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active me-4 navc text-white" to="/courses">Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active me-4 navc text-white" to="/courses">Events</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active me-4 navc text-white" to="/courses">Pages</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active me-4 navc text-white" to="/courses">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active me-4 navc text-white" to="/courses">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active me-4 navc text-white" to="/courses">Elements</Link>
                    </li>
                </ul>
                <form className="d-flex text-white" role="search">
                    <FaSearch className='text-white' />

                </form>
            </div>
        </div>
    </nav>
);

export default Header;
