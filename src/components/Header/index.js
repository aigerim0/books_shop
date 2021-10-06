import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Books</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-8">
                            <li className="nav-item">
                                <Link to ='/' className="nav-link active" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/cart' className="nav-link" >Cart</Link>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;