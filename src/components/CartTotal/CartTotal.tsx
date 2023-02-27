import { ProductsInCart } from 'container/App/App'
import { getProductsObject, Product, productsArray } from 'utils/products'

type Props = {
    productsInCart: ProductsInCart
    productsObject?: {
        [id: number]: Product
    }
}
const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            Total:
            {Object.keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productsObject[parseInt(productId)].price *
                        productsInCart[parseInt(productId)],
                0
            )}{' '}
            $
        </div>
    )
}
export default CartTotal
