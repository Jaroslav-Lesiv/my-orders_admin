import React from 'react'
import { NavConteiner } from '../../ui/components/NavPanel'
import { NavItem } from '../../ui/core/navigation'

function NavPanel() {
    return (
            <NavConteiner>
                <div>
                <NavItem link="/dashboard" className='icon-gauge'>Dasboard</NavItem>
                <NavItem link="/wallet" className='icon-wallet'>Wallet</NavItem>
                <NavItem link="/transaction" className='icon-switch'>Transaction</NavItem>
                <NavItem link="/crypto" className='icon-gauge'>Crypto</NavItem>
                <NavItem link="/exchange" className='icon-switch'>Exchange</NavItem>
                <NavItem link="/setting" className='icon-cog-outline'>Setting</NavItem>
                </div>
            </NavConteiner>
    )
    
}

export default NavPanel
