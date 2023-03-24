import { Button, TextField } from '@mui/material'
import axios from 'axios'
import PageTitle from 'components/PageTitle/PageTitle'
import { useState } from 'react'
import "./CheckoutPage.scss"

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
            <form className='checkout-form' onSubmit={orderSend}>
                <div className="checkout-input">
                    <TextField
                        type="text"
                        placeholder="Tuo nome"
                        value={orderData.name}
                        onChange={handleName}
                        
                    />
                </div>
                <div className="checkout-input">
                    <TextField
                        type="text"
                        placeholder="Tuo indirizzo"
                        value={orderData.address}
                        onChange={handleAddress}
                    />
                </div>
                <Button className='checkout-btn' type="submit">Invia</Button>
            </form>
        )
    }
    const renderMessage = () => {
        return (
            <div>
                <p className='send-text'>Gentile, {orderData.name} grazie per il tuo ordine!</p>
                <p className='send-text'>
                    Materiale ordinato sarà inviato al seguente indirizzo:{' '}
                    {orderData.address}
                </p>
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
        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: orderData.name,
                    address: orderData.address,
                }
            )
            .then((res) => res.data)
            .then(({ name, address }) => {
                setOrderData({
                    name,
                    address,
                })
                setOrderSend(true)
            })
    }
    return (
        <div className='checkout'>
            <PageTitle title={'Checkout'} />
            {isOrderSend ? renderMessage() : renderForm()}
        </div>
    )
}
export default CheckoutPage
