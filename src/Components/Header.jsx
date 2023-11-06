import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Satya shoping</Navbar.Brand>
          </LinkContainer>

          <Nav className="ml-auto">
            <LinkContainer to="/cart">
              <Nav.Link>
                <i class="fa-solid fa-cart-shopping"></i>&nbsp; cart
              </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/signup">
              <Nav.Link href="#link">
                <i class="fa-solid fa-user"></i> &nbsp; singin
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
