import { Button, Card, CardActions, CardContent } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'
import { Product } from 'utils/products'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import { addProductToCart } from 'redux/cartReducer'
import { Link } from 'react-router-dom'

type Props = {
    product: Product
}
const ProductsListItem = ({ product }: Props) => {
    const [count, setCount] = useState<number>(1)
    const onIncrement = () => setCount((prevState) => prevState + 1)
    const onDecrement = () => setCount((prevState) => prevState - 1)
    const isLiked = useAppSelector(
        (state) => state.productsLikeState[product.id]
    )
    const dispatch = useAppDispatch()
    return (
        <Card className="card">
            <CardContent className="product-card">
                <Button
                    variant="outlined"
                    className='like-btn'
                    onClick={() =>
                        isLiked
                            ? dispatch(removeLike(product.id))
                            : dispatch(addLike(product.id))
                    }
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <div className="card-image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="card-content">
                    <div className="card-content-title">
                        <Link to={`/products/${product.id}`}>
                            Titolo: {product.title}
                        </Link>
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
                        Prezzo: <span>€ {product.price}</span>
                    </div>
                </div>
            </CardContent>
            <CardActions>
                <Quantity
                    count={count}
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                />
                <Button
                    className="add-btn"
                    variant="outlined"
                    onClick={() =>
                        dispatch(
                            addProductToCart({ id: product.id, count: count })
                        )
                    }
                >
                    Aggiungi al carrello
                </Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
