import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
// import { HiOutlineBars3BottomLeft } from 'react-icons/hi2';
// import { RxCross2 } from 'react-icons/rx';
import logo from './../../../assets/logo.png'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <div className='container flex_space'>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fa-solid fa-bars"}></i>
                        {/* <i>{click ? <HiOutlineBars3BottomLeft /> : <RxCross2 />}</i> */}
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                        <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
                        <li><Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link></li>
                        <li><Link to="/destination" onClick={closeMobileMenu}>Destination</Link></li>
                        <li><Link to="/blog" onClick={closeMobileMenu}>Blog</Link></li>
                        <li><Link to="/testimonial" onClick={closeMobileMenu}>Testimonial</Link></li>
                        <li><Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link></li>
                    </ul>

                    <div className="login-area flex">
                        <li>
                            <Link to="sign-in">
                                <i className=''>Sign In</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="register">
                                <i className=''>Register</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <button className='primary-btn'>Request a Quote</button>
                            </Link>
                        </li>
                    </div>
                </div>
            </nav>

            <header>
                <div className="container flex_space">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="contact flex_space">
                        <div className="box flex_space">
                            <div className="icon">
                                <i className='far fa-clock'></i>
                            </div>
                            <div className="text">
                                <h4>Working Hours</h4>
                                <Link to='/contact'>Sunday - Friday: 10.00am to 6.15pm</Link>
                            </div>
                        </div>
                        <div className="box flex_space">
                            <div className="icon">
                                <i className='fa fa-phone-volume'></i>
                            </div>
                            <div className="text">
                                <h4>Call Us</h4>
                                <Link to='/contact'>+88 01571368878</Link>
                            </div>
                        </div>
                        <div className="box flex_space">
                            <div className="icon">
                                <i className='fa-solid fa-envelope'></i>
                            </div>
                            <div className="text">
                                <h4>Mail Us</h4>
                                <Link to='/contact'>raselhossain.rafi@gmail.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;