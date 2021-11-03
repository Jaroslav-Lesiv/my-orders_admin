import React from 'react';
import { HeaderConteiner } from '../../../common/styles/header/Header';
import { Logo } from '../../../common/styles/Logo/Logo';
import { Control } from '../../../common/components/HeaderControl/Control';
import { Search } from '../../../common/components/Search/Search';

function Header() {
  return (
    <div>
      <HeaderConteiner>
        <Logo>
          <span>Wallet</span>
        </Logo>
        <div style={{ marginLeft: 'auto', display: 'flex' }}>
          <Search />
          <Control />
        </div>
      </HeaderConteiner>
    </div>
  );
}

export default Header;
