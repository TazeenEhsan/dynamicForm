import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="pt-5">

            <div className="row gx-0">
                <div className="col-lg-4 col-sm-12 ">
                    <Link className="nav-con-link" to="/home"> <h4>Dynamic Form</h4></Link>
                </div>
                <div className="col-lg-8 col-sm-12">
                    <Link className="nav-con-link" to="/">Home</Link>


                    <Link className="nav-con-link" to="/test1">Generate Form</Link>
                    <Link className="nav-con-link" to="/test2">See Forms</Link>


                    <Link className="nav-con-link" to="/contact">Contact Me</Link>

                </div>

            </div>

        </div>






    );
};

export default Header;