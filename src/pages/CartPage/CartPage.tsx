import { Container, Grid } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'
import PageTitle from 'components/PageTitle/PageTitle'
import { Link } from 'react-router-dom'
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
            <Link to={'/checkout'}>Procedi al Checkout</Link>
        </Container>
    )
}
export default CartPage
