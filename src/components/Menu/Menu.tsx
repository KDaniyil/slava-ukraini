import { Button } from '@mui/material'
import CartHeader from 'components/CartHeader/CartHeader'
import MenuIcons from 'components/MenuIcons/MenuIcons'
import { ProductsInCart } from 'container/App/App'
import { Link, NavLink } from 'react-router-dom'
import './Menu.scss'
import MenuItem from './MenuItem'

type Props = {
    productsInCart: ProductsInCart
}
const Menu = ({ productsInCart }: Props) => {
    return (
        <>
            <MenuItem to="/">HOME</MenuItem>
            <MenuItem to="/about-us">CHI SIAMO</MenuItem>
            <MenuItem to="/news">EVENTI & NEWS</MenuItem>
            <MenuItem to="/contacts">CONTATTI</MenuItem>
            <MenuItem to="/shop">SHOP</MenuItem>
            <MenuItem to="/cart">CARELLO</MenuItem>
            <CartHeader productsInCart={productsInCart} />
            <Button className="btn-dona">
                <NavLink to="/donation">DONA</NavLink>
            </Button>
        </>
    )
}
export default Menu
