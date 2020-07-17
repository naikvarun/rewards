import React, {useContext} from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import headerLogo from './bitwise-log-header.png'
import {UserContext} from "../context/UserContext";

import {faUserAstronaut} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () => {
    const {handleSignOut} = useContext(UserContext);

    const dropDown = (
        <FontAwesomeIcon icon={faUserAstronaut}/>
    )

    return (
        <React.Fragment>
            <Navbar bg="white" style={{background: '#fff'}}>
                <Navbar.Brand href="#home">
                    <img height="30" className="header-logo" src={headerLogo} alt="Bitwise"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <NavDropdown title={dropDown}>
                            <NavDropdown.Item onClick={handleSignOut}>SignOut</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}
export default Header;
