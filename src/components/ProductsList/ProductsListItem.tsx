import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import { useState } from 'react'
import { Product } from 'utils/products'

type Props = {
    product: Product
    addProductToCart: (id: number, count: number) => void
}
function ProductsListItem({ product, addProductToCart }: Props) {
    const [count, setCount] = useState<number>(1)
    const onIncrement = () => setCount((prevState) => prevState + 1)
    const onDecrement = () => setCount((prevState) => prevState - 1)

    return (
        <Card>
            <CardContent className="product-card">
                <div className="card-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="card-content">
                    <div className="card-content-title">
                        Titolo: {product.title}
                    </div>
                    <div className="card-content-description">
                        Descrizione: {product.description}
                    </div>
                    <div className="card-content-type">
                        Tipo: {product.type}
                    </div>
                    <div className="card-content-model">
                        Modello: {product.model}
                    </div>
                    <div className="card-content-color">
                        Colore: {product.color}
                    </div>
                    <div className="card-content-price">
                        Prezzo: {product.price} euro
                    </div>
                </div>
            </CardContent>
            <CardActions>
                <Button
                    variant="outlined"
                    onClick={() => onDecrement()}
                    disabled={count <= 1}
                >
                    -
                </Button>
                <TextField size="small" value={count} />
                <Button
                    variant="outlined"
                    onClick={() => onIncrement()}
                    disabled={count >= 9}
                >
                    +
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => addProductToCart(product.id, count)}
                >
                    Add
                </Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
