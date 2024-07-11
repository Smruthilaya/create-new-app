import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as LuIcons from "react-icons/lu";

export interface SubSubNavItem {
    title: string;
    path: string;
    icon: JSX.Element;
    cName?: string;
}


export interface SubNavItem {
  title: string;
  path: string;
  icon: JSX.Element;
  iconClosed?: JSX.Element;
  iconOpened?: JSX.Element;
  cName?: string;
  isOpen: boolean;
  subsubNav?: SubSubNavItem[];
}

export interface SidebarItem {
  title: string;
  path: string;
  icon: JSX.Element;
  iconClosed?: JSX.Element;
  iconOpened?: JSX.Element;
  isOpen: boolean;
  subNav?: SubNavItem[];
  subsubNav?: SubSubNavItem[]
}

export const SidebarData: SidebarItem[] = [
  {
    title: "Home",
    path: "/home",
    icon: <IoIcons.IoIosHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    isOpen: false,
  },
  {
    title: "Clothing & Accessories",
    path: "/clothing-accessories",
    icon: <AiIcons.AiFillShop />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    isOpen: false,

    subNav: [
      {
        title: "Men's Wear",
        path: "/clothing-accessories/men",
        icon: <AiIcons.AiOutlineMan />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        isOpen: false,

        subsubNav: [
          {
            title: "Formals",
            path: "/clothing-accessories/men/formals",
            icon: <LuIcons.LuBookmark />,
          },
          {
            title: "Casuals",
            path: "/clothing-accessories/men/casuals",
            icon: <LuIcons.LuBookmark />,
          },
          {
            title: "Accessories",
            path: "/clothing-accessories/men/accessories",
            icon: <LuIcons.LuBookmark />,
          },
        ],
      },
      {
        title: "Women's Wear",
        path: "/clothing-accessories/women",
        icon: <AiIcons.AiOutlineWoman />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        isOpen: false,

        subsubNav: [
          {
            title: "Formals",
            path: "/clothing-accessories/women/formals",
            icon: <LuIcons.LuBookmark />,
          },
          {
            title: "Dresses",
            path: "/clothing-accessories/women/dresses",
            icon: <LuIcons.LuBookmark />,
          },
          {
            title: "Accessories",
            path: "/clothing-accessories/women/accessories",
            icon: <LuIcons.LuBookmark />,
          },
        ],
      },
    ],
  },
  {
    title: "Orders",
    path: "/orders",
    icon: <IoIcons.IoIosCart />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    isOpen: false,

    subNav: [
      {
        title: "Completed",
        path: "/orders/completed",
        icon: <FaIcons.FaCheckCircle />,
        isOpen: false,
      },
      {
        title: "Pending",
        path: "/orders/pending",
        icon: <RiIcons.RiAlarmLine />,
        isOpen: false,
      },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone />,
    isOpen: false,
  },
];
