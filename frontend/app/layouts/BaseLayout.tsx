import React, { useEffect, useState } from "react";
import { Outlet, NavLink as RouterNavLink, useNavigate } from "react-router";
import {
  Nav,
  NavItem,
  NavbarBrand,
  Collapse,
  Button,
  Row,
  Col,
} from "reactstrap";
import { FaAlignJustify } from "react-icons/fa";
import { useUserStore } from "~/stores/user.store";
import { useLogout } from "~/hooks/useLogout";

function BaseLayout() {
  const [isOpen, setIsOpen] = useState(true);
  const accessToken = useUserStore((state) => state.accessToken);
  const {mutate,isSuccess} = useLogout();
  const navigate = useNavigate();

  useEffect(()=>{
    if(isSuccess) {
      navigate('/login')
    }
  },[isSuccess])
  return (
    <div className="h-100">
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
            <Row className="d-flex flex-col justify-between" style={{height: "100%"}}>
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
              <NavItem>
                <Button color="danger" onClick={()=>{
                  mutate(accessToken)
                }}>
                  logouot
                </Button>
              </NavItem>
            </Row>
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
