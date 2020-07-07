import React from "react";
import styled from "styled-components";
import { Nav, Navbar, Container } from "react-bootstrap";

const ClearNavbar = styled(Navbar)`
  padding: 20px 0 0 0;
`;

export const NavigationBar = () => {
  return (
    <Container>
      <ClearNavbar expand="xl">
        <ClearNavbar.Brand href="/">Nathan Barry</ClearNavbar.Brand>
        <ClearNavbar.Toggle aria-controls="basic-navbar-nav" />
        <ClearNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/book-list">Book List</Nav.Link>
            </Nav.Item>
          </Nav>
        </ClearNavbar.Collapse>
      </ClearNavbar>
    </Container>
  );
};
