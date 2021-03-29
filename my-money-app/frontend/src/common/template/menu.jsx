import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
    <MenuItem path='/' label='Dashboard' icon='dashboard' />
        <MenuItem path='dashboard2' label='Dashboard 2' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path="billingCycles" label="Ciclos de Pagamentos" icon="usd" />
            <MenuItem path="/" label="Logout" icon="sign-out" />
        </MenuTree>
    </ul>
)