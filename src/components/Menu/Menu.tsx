import { Button } from '@mui/material'
import CartHeader from 'components/CartHeader/CartHeader'
import { NavLink } from 'react-router-dom'
import DropdownMenu from './DropdownMenu'
import './Menu.scss'
import MenuItem from './MenuItem'

const Menu = () => {
    return (
        <>
            <MenuItem to="/">HOME</MenuItem>
            <MenuItem to="/about-us">CHI SIAMO</MenuItem>
            <DropdownMenu/>
            <MenuItem to="/contacts">CONTATTI</MenuItem>
            <MenuItem to="/shop">SHOP</MenuItem>
            <MenuItem to="/cart">CARELLO</MenuItem>
            <CartHeader />
            <Button className="btn-dona">
                <NavLink to="/donation">DONA</NavLink>
            </Button>
        </>
    )
}
export default Menu
