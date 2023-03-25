import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { useAppSelector } from 'redux/hooks'
import { Button } from '@mui/material'
import './CartHeader.scss'
import CartHeaderPreview from './CartHeaderPreview'
import { useState } from 'react'

const CartHeader = () => {
    const productsInCart = useAppSelector((state) => state.productsInCart)
    const [isOpen, setIsOpen] = useState<Boolean>(false)
    const showModal = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Button size="small" className="cart" onClick={() => showModal()}>
                <ShoppingCartOutlinedIcon fontSize="medium" />
                {isOpen && (
                    <CartHeaderPreview productsInCart={productsInCart} />
                )}
                <div className="cart-count">
                    {Object.keys(productsInCart).reduce(
                        (total, item) => total + productsInCart[parseInt(item)],
                        0
                    )}
                </div>
            </Button>
        </>
    )
}
export default CartHeader
