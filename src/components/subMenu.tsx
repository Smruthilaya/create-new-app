import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarItem, SubNavItem, SubSubNavItem } from "./SidebarData";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 4px solid white;
    cursor: pointer;
    color: white; 
    
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 4px solid white;
    cursor: pointer;
    color: white;

  }
`;

interface SubMenuProps {
  item: SidebarItem | SubNavItem | SubSubNavItem;
}

const SubMenu: React.FC<SubMenuProps> = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const toggleSubnav = () => setSubnav(!subnav);

  const hasSubNav = (
    item: SidebarItem | SubNavItem | SubSubNavItem
  ): item is SidebarItem | SubNavItem => {
    return "subNav" in item || "subsubNav" in item;
  };

  return (
    <>
      <SidebarLink
        to={item.path}
        onClick={hasSubNav(item) ? toggleSubnav : undefined}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        {hasSubNav(item) && (
          <div>
            {subnav
              ? (item as SidebarItem | SubNavItem).iconOpened
              : (item as SidebarItem | SubNavItem).iconClosed}
          </div>
        )}
      </SidebarLink>
      {subnav && (
        <div style={{ paddingLeft: "20px" }}>
          {hasSubNav(item) &&
            ("subNav" in item ? (
              item.subNav!.map((subItem: SubNavItem, index: number) => (
                <SubMenu item={subItem} key={index} />
              ))
            ) : (
              item.subsubNav!.map((subsubItem: SubSubNavItem, index: number) => (
                <DropdownLink to={subsubItem.path} key={index}>
                  {subsubItem.icon}
                  <SidebarLabel>{subsubItem.title}</SidebarLabel>
                </DropdownLink>
              ))
            ))}
        </div>
      )}
    </>
  );
};

export default SubMenu;
