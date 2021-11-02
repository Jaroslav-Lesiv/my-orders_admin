import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItemConteiner } from '../components/NavPanel'



export const NavItem = ({ children, className, link }) => {
    console.log(link)
    return (
        
            <NavItemConteiner to={link}>
                <div className={className}></div>
                <span>{children}</span>
            </NavItemConteiner>
      
    )
}