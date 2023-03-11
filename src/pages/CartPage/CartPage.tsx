import { Container, Grid } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'
import PageTitle from 'components/PageTitle/PageTitle'
import { useAppSelector } from 'redux/hooks'

type Props = {
    removeProductFromCart?: (id: number) => void
    changeProductQuantity?: (id: number, count: number) => void
}
const CartPage = ({ removeProductFromCart, changeProductQuantity }: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <Container>
            <PageTitle title="Carello" />
            <Grid container spacing={3}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                    changeProductQuantity={changeProductQuantity}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
        </Container>
    )
}
export default CartPage
