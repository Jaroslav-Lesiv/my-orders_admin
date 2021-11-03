import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItemConteiner } from '../../styles/SideBar/SideBar';

export const SideBarItem = ({ children, className, link }) => {
  return (
    <NavItemConteiner to={link}>
      <div className={className}></div>
      <span>{children}</span>
    </NavItemConteiner>
  );
};
