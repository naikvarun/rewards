import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import headerLogo from './bitwise-log-header.png'
import { AmplifySignOut } from "@aws-amplify/ui-react";

const Header = () => {
    return (
        <React.Fragment>
            <Navbar bg="white" style={{background: '#fff'}}>
                <Navbar.Brand href="#home">
                    <img height="30" className="header-logo" src={headerLogo} alt="Bitwise" />
                </Navbar.Brand>
                <Nav className="ml-auto">
                   <AmplifySignOut />
                </Nav>
            </Navbar>
        </React.Fragment>
    )
}
export default Header;
