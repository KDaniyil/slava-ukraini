import { Container, Grid } from '@mui/material'
import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'
import LinkButton from 'components/LinkButton/LinkButton'
import PageTitle from 'components/PageTitle/PageTitle'
import _ from 'lodash'
import { useAppSelector } from 'redux/hooks'
import "./CartPage.scss"

const CartPage = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    const isCartEmpty = _.isEmpty(productsInCart)
    const renderCart = () => {
        return(
            <>
            <PageTitle title="Il tuo carrello" />
            <Grid container spacing={3}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
            <CartTotal productsInCart={productsInCart} />
            <div className='checkout-btn'><LinkButton to={'/checkout'}>Procedi al Checkout</LinkButton></div>
            </>
        )
    }
    const renderCartEmpty = () => {
        return(
            <>
            <PageTitle title="Il tuo carrello è vuoto" />
            </>
        )
    }
    return (
        <Container>
            {
                isCartEmpty ? renderCartEmpty() : renderCart()
            }
        </Container>
    )
}
export default CartPage
