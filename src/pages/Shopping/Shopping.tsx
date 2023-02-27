import { Container } from '@mui/system'
import PageTitle from 'components/PageTitle/PageTitle'
import ProductsList from 'components/ProductsList/ProductsList'

type Props = {
    addProductToCart: (id: number, count: number) => void
}
const Shopping = ({ addProductToCart }: Props) => {
    return (
        <>
            <Container>
                <PageTitle title="I Nostri Articoli" />
                <ProductsList addProductToCart={addProductToCart} />
            </Container>
        </>
    )
}
export default Shopping
