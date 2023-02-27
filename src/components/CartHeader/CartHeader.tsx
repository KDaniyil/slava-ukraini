import { Button } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { ProductsInCart } from 'container/App/App'
import { productsArray, getProductsObject, Product } from 'utils/products'

type Props = {
    productsInCart: ProductsInCart
    productsObject?: {
        [id: number]: Product
    }
}
function CartHeader({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) {
    return (
        <>
            <ShoppingCartOutlinedIcon fontSize="small" />
            <div>
                {Object.keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsInCart[parseInt(productId)]}:{' '}
                        {productsObject[parseInt(productId)].title}
                    </div>
                ))}
            </div>
        </>
    )
}
export default CartHeader
