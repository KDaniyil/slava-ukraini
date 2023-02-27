import { ProductsInCart } from 'container/App/App'
import { Product, getProductsObject, productsArray } from 'utils/products'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: ProductsInCart
    productsObject?: {
        [id: number]: Product
    }
    CartItem?: any
}
const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[parseInt(productId)]}
                    productCout={productsInCart[parseInt(productId)]}
                />
            ))}
        </>
    )
}
export default CartProductList
