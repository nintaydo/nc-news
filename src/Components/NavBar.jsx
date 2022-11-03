import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


const NavBar = () => {
  return (
    <Navbar className="Navbar" bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/home">Navigation Bar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/articles">Articles</Nav.Link>
            <NavDropdown title="Topics" id="basic-nav-dropdown">
              <NavDropdown.Item href="/articles/coding">Coding</NavDropdown.Item>
              <NavDropdown.Item href="/articles/football">Football</NavDropdown.Item>
              <NavDropdown.Item href="/articles/cooking">Cooking</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
