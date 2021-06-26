import React from "react";
import { Container } from 'react-bootstrap'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import FooterBackground from "../FooterBackground/FooterBackground";

import '../Footer/footer.css'

export default function Footer() {
  return (

    <div className="footer" id="footer">

      <Container className="py-5">
      <h1 className="grad-text">Contact us</h1>
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="8">
                <h3 className="title">Microsoft Student Ambassador Club</h3>
                <p>
                  Finding your community is more important than ever as classes
                  and social activities take place virtually.
                </p>
              </MDBCol>
              <MDBCol md="2">
                <h3 className="title">Connect</h3>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Link 1</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 2</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 3</a>
                  </li>
                  
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://msackiit.tech/" target="__blank"> MSAC KIIT </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </Container>
      <FooterBackground/>
    </div>
  );
}
