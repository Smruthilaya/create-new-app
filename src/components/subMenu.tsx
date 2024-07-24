import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";
import { SidebarItem, SubNavItem, SubSubNavItem } from "./SidebarData";

interface SidebarLink {
  items: Object;
  to: string;
  children: React.ReactNode;
}

interface SidebarLabel {
  children: React.ReactNode;
}

interface DropdownLink {
  to: string;
  children: React.ReactNode;
}

interface SubMenuProps {
  item: SidebarItem | SubNavItem | SubSubNavItem;
  handleClick: (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: SidebarItem | SubNavItem | SubSubNavItem
  ) => void;
}

const SidebarLink: React.FC<SidebarLink> = ({ items, to, children }) => {
  return (
    <Link className="sidebarLink" to={to}>
      {children}
    </Link>
  );
};

const SidebarLabel: React.FC<SidebarLabel> = ({ children }) => {
  return <span className="sidebarLabel">{children}</span>;
};

const DropdownLink: React.FC<DropdownLink> = ({ to, children }) => {
  return (
    <Link className="dropdownLink" to={to}>
      {children}
    </Link>
  );
};

const SubMenu: React.FC<SubMenuProps> = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const navigate = useNavigate();
  const toggleSubnav = () => setSubnav(!subnav);

  const hasSubNav = (
    item: SidebarItem | SubNavItem | SubSubNavItem
  ): item is SidebarItem | SubNavItem => {
    return "subNav" in item || "subsubNav" in item;
  };

  const handleItemClick = (
    event: React.MouseEvent<Element>,
    item: SidebarItem | SubNavItem | SubSubNavItem
  ) => {
    event.preventDefault();
    if (hasSubNav(item)) {
      toggleSubnav();
    } else {
      navigate(item.path);
    }
  };
  return (
    <>
      <SidebarLink items={item} to={item.path}>
        <div
          className="menu"
          onClick={(event) => {
            handleItemClick(event, item);
          }}
        >
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
          
        {hasSubNav(item) && (
          <span className="test" >
            {subnav
              ? (item as SidebarItem | SubNavItem).iconOpened
              : (item as SidebarItem | SubNavItem).iconClosed}
          </span>
        )}
        </div>
      </SidebarLink>
      {subnav && (
        <div style={{ paddingLeft: "20px" }}>
          {hasSubNav(item) &&
            ("subNav" in item
              ? item.subNav!.map((subItem: SubNavItem, index: number) => (
                  <SubMenu
                    item={subItem}
                    key={index}
                    handleClick={(event) => handleItemClick(event, subItem)}
                  />
                ))
              : item.subsubNav!.map(
                  (subsubItem: SubSubNavItem, index: number) => (
                    <DropdownLink to={subsubItem.path} key={index}>
                      {subsubItem.icon}
                      <SidebarLabel>{subsubItem.title}</SidebarLabel>
                    </DropdownLink>
                  )
                ))}
        </div>
      )}
    </>
  );
};

export default SubMenu;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { SidebarItem, SubNavItem, SubSubNavItem } from "./SidebarData";

// const SidebarLink = styled(Link)`
//   display: flex;
//   color: #e1e9fc;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
//   list-style: none;
//   height: 60px;
//   text-decoration: none;
//   font-size: 18px;
//   &:hover {
//     background: #252831;
//     border-left: 4px solid white;
//     cursor: pointer;
//     color: white;
//   }
// `;

// const SidebarLabel = styled.span`
//   margin-left: 16px;
// `;

// const DropdownLink = styled(Link)`
//   height: 60px;
//   padding-left: 2rem;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   color: #f5f5f5;
//   font-size: 18px;
//   &:hover {
//     background: #252831;
//     border-left: 4px solid white;
//     cursor: pointer;
//     color: white;
//   }
// `;

// interface SubMenuProps {
//   item: SidebarItem | SubNavItem | SubSubNavItem;
//   handleClick: (
//     event: React.MouseEvent<HTMLAnchorElement>,
//     item: SidebarItem | SubNavItem | SubSubNavItem
//   ) => void;
// }

// const SubMenu: React.FC<SubMenuProps> = ({ item }) => {
//   const [subnav, setSubnav] = useState(false);
//   const navigate = useNavigate();
//   const toggleSubnav = () => setSubnav(!subnav);

//   const hasSubNav = (
//     item: SidebarItem | SubNavItem | SubSubNavItem
//   ): item is SidebarItem | SubNavItem => {
//     return "subNav" in item || "subsubNav" in item;
//   };

//   const handleItemClick = (
//     event: React.MouseEvent<HTMLAnchorElement>,
//     item: SidebarItem | SubNavItem | SubSubNavItem
//   ) => {
//     console.log(item)
//     event.preventDefault();
//     if (hasSubNav(item)) {
//       toggleSubnav();
//     } else {
//       navigate(item.path);
//     }
//   };
//   return (
//     <>
//       <SidebarLink
//         to={item.path}
//         onClick={(event) => handleItemClick(event, item)}
//       >
//         <div>
//           {item.icon}
//           <SidebarLabel>{item.title}</SidebarLabel>
//         </div>
//         {hasSubNav(item) && (
//           <div>
//             {subnav
//               ? (item as SidebarItem | SubNavItem).iconOpened
//               : (item as SidebarItem | SubNavItem).iconClosed}
//           </div>
//         )}
//       </SidebarLink>
//       {subnav && (
//         <div style={{ paddingLeft: "20px" }}>
//           {hasSubNav(item) &&
//             ("subNav" in item
//               ? item.subNav!.map((subItem: SubNavItem, index: number) => (
//                   <SubMenu
//                     item={subItem}
//                     key={index}
//                     handleClick={(event) => handleItemClick(event, subItem)}
//                   />
//                 ))
//               : item.subsubNav!.map(
//                   (subsubItem: SubSubNavItem, index: number) => (
//                     <DropdownLink to={subsubItem.path} key={index}>
//                       {subsubItem.icon}
//                       <SidebarLabel>{subsubItem.title}</SidebarLabel>
//                     </DropdownLink>
//                   )
//                 ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default SubMenu;
