import { Product, getProductsObject, productsArray } from 'utils/products'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
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
                <>
                    <CartItem
                        key={productId}
                        product={productsObject[parseInt(productId)]}
                        productCount={productsInCart[parseInt(productId)]}
                    />
                </>
            ))}
        </>
    )
}
export default CartProductList
