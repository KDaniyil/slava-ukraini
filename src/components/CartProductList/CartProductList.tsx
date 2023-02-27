import { ProductsInCart } from 'container/App/App'
import { Product, getProductsObject, productsArray } from 'utils/products'

type Props = {
    productsInCart: ProductsInCart
    productsObject?: {
        [id: number]: Product
    }
}
const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsInCart[parseInt(productId)]}:{' '}
                    {productsObject[parseInt(productId)].title}
                </div>
            ))}
        </div>
    )
}
export default CartProductList
