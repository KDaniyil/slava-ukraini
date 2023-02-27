import { Grid } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
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
            <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
export default CartPage
