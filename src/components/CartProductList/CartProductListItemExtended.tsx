import { Card, CardContent, Grid } from '@mui/material'
import { Product } from 'utils/products'

type Props = {
    product: Product
    productCount: number
}
const CartProductListItemExtended = ({ product, productCount }: Props) => {
    return (
        <Grid item xs={12} sm={4}>
            <Card>
                <CardContent>
                    <div className="product-image">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div>{product.title}</div>
                    <p>Prezzo: {product.price}</p>
                    <p>Quantità: {productCount}</p>
                </CardContent>
            </Card>
        </Grid>
    )
}
export default CartProductListItemExtended
