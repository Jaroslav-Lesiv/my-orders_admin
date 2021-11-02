import React from 'react'
import { ControlIconConteiner } from '../../common/styles/header/Control'
import { HeaderConteiner } from '../../common/styles/header/Header'
import { Logo } from '../../common/styles/logo/Logo'
import { Control } from '../../common/components/header/Control'
import { Search } from '../../common/components/search/Search'




function Header() {
    return (
        <div>
            <HeaderConteiner>
                <Logo><span>Wallet</span></Logo>
                <div style={{ marginLeft: 'auto', display: 'flex' }}>
                    <Search />
                    <Control/>
                </div>
            </HeaderConteiner>
        </div>
    )
}

export default Header
