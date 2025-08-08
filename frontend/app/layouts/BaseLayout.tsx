
import React, { useState } from "react";
import { Outlet, NavLink as RouterNavLink } from "react-router";
import {
  Nav,
  NavItem,
  NavbarBrand,
  Collapse,
  Button,
  Row,
  Col
} from "reactstrap";
import { FaAlignJustify } from "react-icons/fa";

function BaseLayout() {
const [isOpen, setIsOpen] = useState(true);
  return (
     <div className="h-100" >
      <Row noGutters className="h-100">
        {/* Sidebar */}
        <Col
          md={isOpen ? 2 : 1}
          className="d-flex flex-column items-center p-2 bg-gray-400 text-black"
        >

          <button onClick={() => setIsOpen(!isOpen)}>
          <FaAlignJustify color="#FFFFFF" />
          </button>

          <Collapse isOpen={isOpen}>
            <Nav vertical>
              <NavItem>
                <RouterNavLink to="/" className="nav-link text-black">
                  Product
                </RouterNavLink>
              </NavItem>
              <NavItem>
                <RouterNavLink to="/reports" className="nav-link text-black">
                  Sales
                </RouterNavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Col>

        {/* Main content */}
        <Col md={isOpen ? 10 : 11} className="p-4">
          <Outlet />
        </Col>
      </Row>
    </div>
  );
}

export default BaseLayout;