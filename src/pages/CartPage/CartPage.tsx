import { Container, Grid } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'
import LinkButton from 'components/LinkButton/LinkButton'
import PageTitle from 'components/PageTitle/PageTitle'
import { useAppSelector } from 'redux/hooks'

const CartPage = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    return (
        <Container>
            <PageTitle title="Carello" />
            <Grid container spacing={3}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
            <LinkButton to={'/checkout'}>Procedi al Checkout</LinkButton>
        </Container>
    )
}
export default CartPage
