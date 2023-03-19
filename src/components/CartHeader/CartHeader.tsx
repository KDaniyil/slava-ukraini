import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import CartTotal from 'components/CartTotal/CartTotal'
import { useAppSelector } from 'redux/hooks'
import { Button } from '@mui/material'
import "./CartHeader.scss"

const CartHeader = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <>
            <Button size='small' className='cart'>
                <ShoppingCartOutlinedIcon fontSize="medium" />
                <div className='cart-count'>
                    {Object.keys(productsInCart).reduce((total, item) => total + productsInCart[parseInt(item)], 0)}
                    </div>
                </Button>
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}
export default CartHeader
