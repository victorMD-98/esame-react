import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../assets/logo.png"
import "../App.css"
import { FaRegUser, FaSearch, FaBell } from "react-icons/fa";

function NavBar() {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand ><img id='logo' src={logo} alt="logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link >Home</Nav.Link>
                <Nav.Link >TV Shows</Nav.Link>
                <Nav.Link >Movies</Nav.Link>
                <Nav.Link >Recently Added</Nav.Link>
                <Nav.Link >My List</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link ><FaSearch/></Nav.Link>
                <Nav.Link>
                KIDS
                </Nav.Link>
                <Nav.Link ><FaBell /></Nav.Link>
                <NavDropdown title={<FaRegUser/>}  id="collapsible-nav-dropdown">
                <NavDropdown.Item >Action</NavDropdown.Item>
                <NavDropdown.Item >
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item >Something</NavDropdown.Item>
                <NavDropdown.Divider />
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  );
}

export default NavBar;