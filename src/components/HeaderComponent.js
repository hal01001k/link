import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import { NavLink } from "react-router-dom";
function Header() {

    const Exa = (props) => {
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);
        return (
            <div>
                <Navbar className="nb fixed-top" dark expand="md">
                    <NavbarBrand href="/website/#/home">Cornerstones Inc</NavbarBrand>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'>About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/interior'>Interior</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/architecture'>Architecture</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Projects
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink className="nav-link"  style={{color:'black'}} to='/onproject'>Ongoing</NavLink>
                                    </DropdownItem>
                                    <DropdownItem >
                                        <NavLink className="nav-link" style={{color:'black'}} to='/finproject'>Finished</NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <NavbarText><a href="tel:8269874598">Call Us :</a> 8269874598</NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
    return (
        <div>
            <Exa/>
        </div>
    )
}

export default Header;
