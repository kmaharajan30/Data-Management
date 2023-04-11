import React from 'react'
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { Link, NavLink } from 'react-router-dom';

export default function 
() {
  return (
    <div className='header'>
        <Navbar bg="primary" variant="dark">
          <Nav className="me-auto">
          <Link to='/'><Navbar.Brand className='ms-3'>Home</Navbar.Brand></Link>
          <Link to='/register'><Navbar.Brand  className='ms-3'>Registration</Navbar.Brand></Link>
          <Link to='/details'><Navbar.Brand  className='ms-3'>Students List</Navbar.Brand></Link>
          </Nav>
      </Navbar>
    </div>
  )
}
