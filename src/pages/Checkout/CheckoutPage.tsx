import PageTitle from 'components/PageTitle/PageTitle'
import { useState } from 'react'

type Props = {}
type Order = {
    name: string
    address: string
}
const CheckoutPage = (props: Props) => {
    const [isOrderSend, setOrderSend] = useState<boolean>(false)
    const [orderData, setOrderData] = useState<Order>({
        name: '',
        address: '',
    })

    const renderForm = () => {
        return (
            <form onSubmit={orderSend}>
                <div>
                    <input
                        type="text"
                        placeholder="Tuo nome"
                        value={orderData.name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Tuo indirizzo"
                        value={orderData.address}
                        onChange={handleAddress}
                    />
                </div>
                <button type="submit">Invia</button>
            </form>
        )
    }
    const renderMessage = () => {
        return (
            <div>
                <div>Gentile, {orderData.name} thnks for your order!</div>
                <div>Indirizzo: {orderData.address}</div>
            </div>
        )
    }
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) =>
        setOrderData((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) =>
        setOrderData((prevState) => ({
            ...prevState,
            address: e.target.value,
        }))

    const orderSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    return (
        <>
            <PageTitle title={'Checkout'} />
            {isOrderSend ? renderMessage() : renderForm()}
        </>
    )
}
export default CheckoutPage
