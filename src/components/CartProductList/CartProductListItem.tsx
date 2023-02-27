import { Product } from 'utils/products'

type Props = {
    product: Product
    productCout: number
}
const CartProductListItem = ({ product, productCout }: Props) => {
    return (
        <div>
            {product.title} : {productCout}
        </div>
    )
}
export default CartProductListItem
