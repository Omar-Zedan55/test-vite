import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import style from "./navbar.module.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Navbarcomp() {
    useEffect(function () {
        window.addEventListener('scroll', function () {
            console.log(window.scrollY);
            if (window.scrollY > 0) {
                document.querySelector(".navvirtical").style.padding="0"
            } else {
                document.querySelector(".navvirtical").style.padding="20px"
            }
        })
    }, [])
    const navstyle = `${style.vheight} navvirtical bg-[#2C3E50] selector z-40 fixed w-full `
    return (
        <div className={navstyle}>
            <BasicExample />
        </div>
    )
}
function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-[#2C3E50]">
            <Container>
                <NavLink className="no-underline" to="home"><h1 className='text-white no-underline text-3xl font-bold'>START FRAMEWORK</h1></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto ">
                        <NavLink className='text-white no-underline   me-7' to="about"><p className=' font-bold' >ABOUT</p></NavLink>
                        <NavLink className='text-white no-underline  me-7' to="portfolio"><p className=' font-bold' >POTIFOLIO</p></NavLink>
                        <NavLink className='text-white no-underline  me-7' to="contact"><p className=' font-bold' >CONTACT</p></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

