import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand ><img src="" alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link >Features</Nav.Link>
                <Nav.Link >Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item >Action</NavDropdown.Item>
                <NavDropdown.Item >
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item >Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link >More deets</Nav.Link>
                <Nav.Link eventKey={2}>
                Dank memes
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  );
}

export default NavBar;