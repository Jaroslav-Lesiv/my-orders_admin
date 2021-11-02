import React from 'react'
import { ControlIconConteiner } from '../../ui/components/Control'
import { HeaderConteiner } from '../../ui/components/Header'
import { Logo } from '../../ui/core/Logo'
import { Control } from './Control'
import { Search } from '../../ui/core/Search'




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
