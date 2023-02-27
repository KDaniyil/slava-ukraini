import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'
import PageTitle from 'components/PageTitle/PageTitle'
import { ProductsInCart } from 'container/App/App'

type Props = {
    productsInCart: ProductsInCart
}
const CartPage = ({ productsInCart }: Props) => {
    return (
        <div>
            <PageTitle title="Carello" />
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartPage
