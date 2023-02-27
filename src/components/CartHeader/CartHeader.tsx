import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { ProductsInCart } from 'container/App/App'
import CartTotal from 'components/CartTotal/CartTotal'
import CartProductList from 'components/CartProductList/CartProductList'

type Props = {
    productsInCart: ProductsInCart
}
const CartHeader = ({ productsInCart }: Props) => {
    return (
        <>
            <ShoppingCartOutlinedIcon fontSize="small" />
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </>
    )
}
export default CartHeader
