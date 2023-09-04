import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component {
    render(){
        return (
        <Navbar  sticky="top" exapnd="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#">DM|</Navbar.Brand>
                
            <Navbar.Toggle/>    
            <Navbar.Collapse>               
                <Nav>
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#features" >Projects</Nav.Link>
                    <Nav.Link href="#pricing" >Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>   
                
         </Navbar>
        );
    }
}
     

export default Header;