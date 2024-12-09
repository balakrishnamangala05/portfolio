import { Navbar, Container, Nav} from "react-bootstrap";

export const NavBar = () => {
  return (
    <Navbar expand="md" className="nave">
      <Container>
        <Navbar.Brand href="#code">@Code by Bala</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar">
          <span className="navbar-toggler"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
