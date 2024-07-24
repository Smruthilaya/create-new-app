import React, { FC, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
// import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import {
  SidebarData,
  SidebarItem,
  SubNavItem,
  SubSubNavItem,
} from "./SidebarData";
import SubMenu from "./subMenu";

// const Nav = styled.div`
//   background: #15171c;
//   height: 60px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const NavIcon = styled(Link)`
//   margin-left: 1rem;
//   font-size: 2rem;
//   height: 60px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   color: #e1e9fc;
//   &:hover {
//     color: blue;
//   }
// `;

// const SidebarNav = styled.nav<{ sidebar: boolean }>`
//   background: #15171c;
//   width: 300px;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   position: fixed;
//   top: 0;
//   left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
//   transition: left 0.2s ease;
//   z-index: 10;
// `;

// const SidebarWrap = styled.div`
//   width: 100%;
// `;

interface Nav {
  children: React.ReactNode;
}

interface NavIcon {
  to: string;
  children: React.ReactNode;
}

interface SidebarNav {
  sidebar: boolean;
  children: React.ReactNode;
}

interface SidebarWrap {
  children: React.ReactNode;
}

const NavIcon: React.FC<NavIcon> = ({ to, children }) => {
  return (
    <Link className="navIcon" to={to}>
      {children}
    </Link>
  );
};

const Nav: React.FC<Nav> = ({ children }) => {
  return <div className="nav">{children}</div>;
};

const SidebarNav: React.FC<SidebarNav> = ({ sidebar, children }) => {
  return (
    <nav className={`sidebarNav ${sidebar ? "open" : "closed"}`}>
      {children}
    </nav>
  );
};

const SidebarWrap: React.FC<SidebarWrap> = ({ children }) => {
  return <div className="sidebarWrap">{children}</div>;
};

const Sidebar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);

  const navigate = useNavigate();

  const showSidebar = () => setSidebar(!sidebar);

  const handleItemClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: SidebarItem | SubNavItem | SubSubNavItem
  ) => {
    if (!("subNav" in item) && !("subsubNav" in item)) {
      navigate(item.path);
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <h1 className="sample">SAMPLE</h1>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </NavIcon>x
          <SidebarWrap>
            {SidebarData.map((item: SidebarItem, index: number) => (
              <SubMenu
                item={item}
                key={index}
                handleClick={(event) => handleItemClick(event, item)}
              />
            ))}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
      <Outlet />
    </>
  );
};

export default Sidebar;
