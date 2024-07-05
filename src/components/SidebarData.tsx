import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

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
  subsubNav?: SubSubNavItem[];
}

export interface SidebarItem {
  title: string;
  path: string;
  icon: JSX.Element;
  iconClosed?: JSX.Element;
  iconOpened?: JSX.Element;
  subNav?: SubNavItem[];
  subsubNav?: SubSubNavItem[]
}

export const SidebarData: SidebarItem[] = [
  {
    title: "About Us",
    path: "/about-us",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Our Aim",
        path: "/about-us/aim",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subsubNav: [
          {
            title: "Aim 1",
            path: "/about-us/aim/aim1",
            icon: <IoIcons.IoIosPaper />,
          },
          {
            title: "Aim 2",
            path: "/about-us/aim/aim2",
            icon: <IoIcons.IoIosPaper />,
          },
        ],
      },
      {
        title: "Our Vision",
        path: "/about-us/vision",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Events",
    path: "/events",
    icon: <FaIcons.FaEnvelopeOpenText />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Event 1",
        path: "/events/events1",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Event 2",
        path: "/events/events2",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaIcons.FaPhone />,
  },
];
