/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer4 b-t spacer">
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Address</h5>
            <p>Avenida de los Unicornio Mágicos, Apartamento 5678, Edificio Arcoíris Dorado, Ciudad de las Mariposas Encantada, Supercluster de las Sílabas Astrales.</p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Phone</h5>
            <p>
              Reception : +111 111 1111 <br />
              Office : +207 235 7890
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Email</h5>
            <p>
              Personal :{" "}
              <a href="#" className="link">
                prrohpta@gmail.com
              </a>{" "}
              <br />
              Site :{" "}
              <a href="#" className="link">
                prrahpta@hpta.prro.com
              </a>
            </p>
          </Col>
          <Col lg="3" md="6">
            <h5 className="m-b-20">Social</h5>
            <div className="round-social light">
              <a href="#" className="link">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="link">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="link">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="#" className="link">
                <i className="fa fa-youtube-play"></i>
              </a>
              <a href="#" className="link">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14 justify-content-between">
                <div className="m-t-10 m-b-10 copyright">
                  All Rights Reserved by ME.
                </div>
                <div className="links ms-auto m-t-10 m-b-10">
                  <a href="#" className="p-10 p-l-0">
                    Terms of Use
                  </a>
                  <a href="#" className="p-10">
                    Legal Disclaimer
                  </a>
                  <a href="#" className="p-10">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
