import React from 'react'
import { Navbar, Nav, Container, Button, NavDropdown, Image } from 'react-bootstrap'
import { useAuth0 } from "../react-auth0-spa";
import { firebaseClient } from '../firebase'

const NavigationBar = props => {

  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <Container fluid className="bg-dark">
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="px-0 py-3">
        <Navbar.Brand href="#home"><span role="img" aria-label="Campground" className="font-weight-bold">⛺ Campground</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#AuthorSearch" onClick={()=>{props.setPage('authors')}}>Author Search</Nav.Link>
            <Nav.Link href="#Keyword" onClick={() => {props.setPage('keywords')}}>Keyword Search</Nav.Link>
          </Nav>
          <Nav>
            {isAuthenticated ?
            <>
              <Image src={user.picture} alt="Profile" roundedCircle style={{height:32,width:32,alignSelf:'center'}} className="d-none d-lg-block" />
                <NavDropdown title={user.name} id="collasible-nav-dropdown" alignRight>
                <NavDropdown.Item href="#MySavedAuthors" onClick={()=>{props.setPage('lists')}}>My Saved Authors</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item disabled>{user.email}</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" onClick={() => {
                  firebaseClient.signOut()
                  logout();
                  }}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </>
            :
            <Button size="sm" variant="outline-light" onClick={() => loginWithRedirect({})}>Log in</Button>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
    </Container>
  )
}

export default NavigationBar