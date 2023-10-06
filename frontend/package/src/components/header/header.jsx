/* eslint-disable */
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import "./header.scss";
import Top from "./buttons/Button";
import Swagger from "./swagger/Swagger";
import logo from "../../assets/images/logos/white-text.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  /*--------------------------------------------------------------------------------*/
  /*To open NAVBAR in MOBILE VIEW                                                   */
  /*--------------------------------------------------------------------------------*/

  return (
    <div className="topbar" id="top">
      <div className="header6">
        <Container className="po-relative">
          <Navbar className="navbar-expand-lg h6-nav-bar">
            <NavbarBrand href="/">
              <img src={logo} alt="wrapkit" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse
              isOpen={isOpen}
              navbar
              className="hover-dropdown font-14 justify-content-end"
              id="h6-info"
            >
              <Nav navbar className="ms-auto">
                <NavItem>
                  <Link className="nav-link" to={"/"}>
                    <Top text="Biblioteca" />
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to={"/perfil"}>
                    <Top text="Perfil" />
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to={"/usuario"}>
                    <Top text="Usuarios" />
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to={"/Juegos"}>
                    <Top text="Juegos" />
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to={"/desarroladores"}>
                    <Top text="Desarrolladores" />
                  </Link>
                </NavItem>
              </Nav>

              <div className="act-buttons">
                <Link to="/#coming">
                  <Swagger text="Swagger Docs" />
                </Link>
              </div>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};
export default Header;
