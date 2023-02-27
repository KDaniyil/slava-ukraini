import { Button } from '@mui/material'
import CartHeader from 'components/CartHeader/CartHeader'
import { ProductsInCart } from 'container/App/App'
import { Link } from 'react-router-dom'
import './Menu.scss'

type Props = {
    productsInCart: ProductsInCart
}
const Menu = ({ productsInCart }: Props) => {
    return (
        <>
            <Button color="inherit">
                <Link to={'/'}>HOME</Link>
            </Button>
            <Button color="inherit">
                <Link to={'aboutus'}>CHI SIAMO</Link>
            </Button>
            <Button color="inherit">
                <Link to={'news'}>EVENTI & NEWS</Link>
            </Button>
            <Button color="inherit">
                <Link to={'contacts'}>CONTATTI</Link>
            </Button>
            <Button color="inherit">
                <Link to={'shopping'}>SHOPPING</Link>
            </Button>
            <Button color="inherit">
                <Link to={'cart'}>CARELLO</Link>
            </Button>
            <CartHeader productsInCart={productsInCart} />
            <Button color="inherit" className="btn-dona">
                DONA
            </Button>
        </>
    )
}
export default Menu
