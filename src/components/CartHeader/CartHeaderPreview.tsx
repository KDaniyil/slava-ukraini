import CartProductList from 'components/CartProductList/CartProductList'
import CartTotal from 'components/CartTotal/CartTotal'
import _ from 'lodash'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartHeaderPreview = ({ productsInCart }: Props) => {
    const isCartEmpty = _.isEmpty(productsInCart)
    const renderCartPreview = () => {
        return(
            <>
            <p>
                Riepilogo carrello
            </p>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
            </>
        )
    }
    const renderCartPreviewEmpty = () => {
        return(
            <p>
                Il tuo carrello è vuoto
            </p>
        )
    }
    return (
        <div className="modal">
            {
                isCartEmpty ? renderCartPreviewEmpty() : renderCartPreview()
            }
        </div>
    )
}

export default CartHeaderPreview
