import React from 'react';
import { NavConteiner } from '../../../common/styles/SideBar/SideBar';
import { NavItem, SideBarItem } from '../../../common/components/SideBarItem/SideBarItem';

function SideBar() {
  return (
    <NavConteiner>
      <div>
        <SideBarItem link="/dashboard" className="icon-gauge">
          Dasboard
        </SideBarItem>
        <SideBarItem link="/wallet" className="icon-wallet">
          Wallet
        </SideBarItem>
        <SideBarItem link="/transaction" className="icon-switch">
          Transaction
        </SideBarItem>
        <SideBarItem link="/crypto" className="icon-gauge">
          Crypto
        </SideBarItem>
        <SideBarItem link="/exchange" className="icon-switch">
          Exchange
        </SideBarItem>
        <SideBarItem link="/setting" className="icon-cog-outline">
          Setting
        </SideBarItem>
      </div>
    </NavConteiner>
  );
}

export default SideBar;
