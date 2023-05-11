import React, { useContext, useRef } from 'react';
import './header.css';
import { Container, Row } from 'reactstrap';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const navLinks = [
    {
        path: '/home',
        display: "Home"
    },
    {
        path: '/tours',
        display: "Tours"
    },
    {
        path: '/about',
        display: "About"
    }
]

export default function Header() {
    const menuRef = useRef(null);
    const { user, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
    }

    const toggleMenu = () => menuRef.current.classList.toggle("show-menu");

    return (
        <header className='header'>
            <Container>
                <Row>
                    <div className='nav-wrapper d-flex align-items-center justify-content-between'>
                        <div className='header-logo'>
                            <img src="/images/logo.png" alt='logo-img' />
                        </div>

                        <div className='header-nav' ref={menuRef} onClick={toggleMenu}>
                            <ul className='nav-menu d-flex align-items-center gap-4'>
                                {
                                    navLinks.map((item, index) => (
                                        <li className='nav-item' key={index}>
                                            <NavLink className={navClass => navClass.isActive ? "active-link" : ""} to={item.path}>{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className='header-right d-flex align-items-center gap-4'>
                            <div className='nav-btn d-flex align-items-center'>
                                {
                                    user ?
                                        <div className='d-flex align-items-center gap-2'>
                                            <h5 className='mb-0 text-center'>{user.username}</h5>
                                            <button onClick={logout} className='btn btn-dark'>Logout</button>
                                        </div> :
                                        <>
                                            <button className='btn secondary-btn'>
                                                <Link to='/login'>Login</Link>
                                            </button>
                                            <button className='btn primary-btn'>
                                                <Link to='/register'>Register</Link>
                                            </button>
                                        </>
                                }
                            </div>

                            <span className='menu-mobile' onClick={toggleMenu}>
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    )
}
