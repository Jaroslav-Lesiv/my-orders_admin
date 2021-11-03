import React from 'react';
import { HeaderConteiner } from '../../../common/styles/Header/Header';
import { Logo } from '../../../common/styles/Logo/Logo';
import { HeaderControl } from '../../../common/components/HeaderControl/HeaderControl';
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
          <HeaderControl />
        </div>
      </HeaderConteiner>
    </div>
  );
}

export default Header;
