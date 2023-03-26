import { Button } from '@mui/material'
import CartHeader from 'components/CartHeader/CartHeader'
import { NavLink } from 'react-router-dom'
import DropdownMenu from './DropdownMenu'
import './Menu.scss'
import MenuItem from './MenuItem'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Menu = () => {

    const [isBurger, setIsBurger] = useState<boolean>(false)
    const handleBurger = () => setIsBurger(!isBurger)
    return (
        <>
            <div className= {isBurger ? "menu active": "menu"}>
                <MenuItem to="/">HOME</MenuItem>
                <MenuItem to="/about-us">CHI SIAMO</MenuItem>
                <DropdownMenu />
                <MenuItem to="/contacts">CONTATTI</MenuItem>
                <MenuItem to="/favorites">
                    <ThumbUpAltIcon />
                </MenuItem>
                <MenuItem to="/shop">SHOP</MenuItem>
                <MenuItem to="/cart">CARELLO</MenuItem>
            </div>
            <CartHeader />
            <Button className="btn-dona">
                <NavLink to="/donation">DONA</NavLink>
            </Button>
            <button className='btn-burger' onClick={handleBurger}>
                {isBurger ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large'/> }
            </button>
        </>
    )
}
export default Menu
