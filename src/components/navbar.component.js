import React from 'react';
import styled from 'styled-components';
import { Nav, Navbar } from 'react-bootstrap';

const Styles = styled.div`

`;

export const NavigationBar = () => {
    return (
        <Navbar expand="lg">
        <Navbar.Brand href="/">Nathan Barry</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
              <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link href='/book-list'>Book List</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}