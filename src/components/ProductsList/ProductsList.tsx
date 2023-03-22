import { Grid } from '@mui/material'
import { productsArray } from 'utils/products'
import ProductsListItem from './ProductsListItem'
import './ProductsList.scss'

type Props = {}
const ProductsList = (props: Props) => {
    return (
        <>
            <Grid container spacing={3}>
                {productsArray.map((product) => {
                    return (
                        <>
                            <Grid item xs={12} sm={6} md={4}>
                                <ProductsListItem product={product} />
                            </Grid>
                        </>
                    )
                })}
            </Grid>
        </>
    )
}
export default ProductsList
