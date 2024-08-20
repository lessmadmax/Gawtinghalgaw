import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import arrow from "./arrow.png"


function Navigation() {

    const navigate = useNavigate()

  return (
    <div style={{ width: '37%', margin: '0 auto' }}>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav>
            <Nav.Link

              onClick={() => {
                  navigate(-1)
              }}

            ><img src={arrow} alt="arrow"  width="50" height="50"/></Nav.Link>
          </Nav>
          <Navbar.Brand>과팅할과?</Navbar.Brand>
          <Nav>
            <Nav.Link 

              onClick={() => {
                  navigate("/matchinglist");
              }} 

            >매칭</Nav.Link>
            <Nav.Link 
            
              
            
            >채팅방</Nav.Link>
            <Nav.Link
            
              onClick={() => {
                navigate("/mypage");
              }}          
            
            >내 프로필</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;