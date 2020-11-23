import React from 'react'
import './Nav.css'
import { FaAddressCard, FaCode, FaHome, FaLaptopCode, FaUser } from 'react-icons/fa'
import { Link } from "react-scroll"

const Nav = () => {
    return (
        <>
            <nav className="navbar">
                <ul className="nav_list">
                    <li className="nav_item">
                        <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className="link link1">
                            <span>
                                <FaHome/>
                            </span>
                        </Link>
                    </li>
                    <li className="nav_item">
                        <Link
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className="link link2">
                            <span>
                                <FaUser/>
                            </span>
                        </Link>
                    </li>
                    <li className="nav_item">
                        <Link
                        to="section5"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className="link link5">
                            <span>
                                <FaCode/>
                            </span>
                        </Link>
                    </li>
                    <li className="nav_item">
                        <Link                         
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={-50}
                        duration={500}
                        className="link link3">
                            <span>
                                <FaLaptopCode/>
                            </span>
                        </Link>
                    </li>
                    <li className="nav_item">
                        <Link 
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={10}
                        duration={500}
                        className="link link4">
                            <span>
                                <FaAddressCard/>
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav