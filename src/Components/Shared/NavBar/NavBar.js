import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { UserContext } from '../../../App';

const NavBar = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <Navbar className="mt-2" expand="lg">
            <h3 className="nav-head ml-3 ">  Beach-Service </h3>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto ms-auto">
                    <Link className="ml-5  nav-menu" to="/home">Home</Link>
                    <Link className="ml-5  nav-menu" to="/about">About Us</Link>
                    <Link className="ml-5  nav-menu" to="/admin">Admin</Link>
                    {/* <Link className="ml-5  nav-menu" to="/userDashboard">User Review</Link> */}
                    <Link className="ml-5  nav-menu" to="/contact">Contact Us </Link>

                </Nav>
                {user.name ? <p className="user-name">{user.name} </p> : <Link to="/login"><button className="mr-2 logged-btn">Login </button></Link>}

            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;