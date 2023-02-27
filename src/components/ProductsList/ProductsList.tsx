import { Grid } from '@mui/material'
import { productsArray } from 'utils/products'
import ProductsListItem from './ProductsListItem'
import './ProductsList.scss'

type Props = {
    addProductToCart: (id: number, count: number) => void
}
function ProductsList({ addProductToCart }: Props) {
    return (
        <>
            <Grid container spacing={3}>
                {productsArray.map((product) => {
                    return (
                        <>
                            <Grid item xs={12}>
                                <ProductsListItem
                                    product={product}
                                    addProductToCart={addProductToCart}
                                />
                            </Grid>
                        </>
                    )
                })}
            </Grid>
        </>
    )
}
export default ProductsList
