import {Container, Navbar, NavbarToggler, Nav, NavItem, Collapse} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const SiteNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark sticky='top' expand='md' >
            <Container>
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mmcNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
                <Collapse isOpen={menuOpen} navbar id="mmcNavbar">
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/about'>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/reservations'>Reservations</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/careers'>Careers</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
} 

export default SiteNav;