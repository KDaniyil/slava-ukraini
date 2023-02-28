import { Grid } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'
import PageTitle from 'components/PageTitle/PageTitle'
import { ProductsInCart } from 'container/App/App'

type Props = {
    productsInCart: ProductsInCart
    removeProductFromCart: (id: number) => void
}
const CartPage = ({ productsInCart, removeProductFromCart }: Props) => {
    return (
        <div>
            <PageTitle title="Carello" />
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartPage
