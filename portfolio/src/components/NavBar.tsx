import { Navbar, Nav } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar>
            <Navbar.Brand href="#home">Tuneer Roy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar