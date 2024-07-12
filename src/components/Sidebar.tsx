import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { SidebarData, SidebarItem } from "./SidebarData";
import SubMenu from "./subMenu";

const Nav = styled.div`
  background: #15171c;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 2rem;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #e1e9fc;
  &:hover {
    color: blue;
  }
`;

const SidebarNav = styled.nav<{ sidebar: boolean }>`
  background: #15171c;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: left 0.2s ease;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <h1
            style={{ textAlign: "center", marginLeft: "620px", color: "white" }}
          >
            SAMPLE
          </h1>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>
          <SidebarWrap>
            {SidebarData.map((item: SidebarItem, index: number) => (
              <SubMenu item={item} key={index} />
            ))}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
      <Outlet/>
    </>
  );
};

export default Sidebar;
