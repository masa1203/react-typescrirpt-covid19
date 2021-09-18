import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      style={{ marginBottom: "10px" }}
    >
      <Container>
        <Navbar.Brand href="/">Covid Tracker</Navbar.Brand>
        <Nav>
          <Nav.Link href="/">国ごとの感染状況</Nav.Link>
          <Nav.Link href="/world">世界の感染状況</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
