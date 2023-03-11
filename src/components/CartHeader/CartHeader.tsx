import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'
import { useAppSelector } from 'redux/hooks'

const CartHeader = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <>
            <ShoppingCartOutlinedIcon fontSize="small" />
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}
export default CartHeader
