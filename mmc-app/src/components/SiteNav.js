import {Container, Navbar, NavbarBrand, Nav, NavItem, NavLink, Collapse} from 'reactstrap';

const SiteNav = () => {
    return (
        <Navbar className="navbar-expand-sm navbar-dark sticky-top">
            <Container>
                <NavbarBrand href="#"></NavbarBrand>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mmcNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <Collapse id="mmcNavbar">
                    <Nav>
                        <NavItem type="active">
                            <NavLink href="#">Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="about.html">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="reservation.html">Reservations</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="careers.html">Careers</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
} 

export default SiteNav;