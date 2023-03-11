import { Container } from '@mui/system'
import PageTitle from 'components/PageTitle/PageTitle'
import ProductsList from 'components/ProductsList/ProductsList'

type Props = {}
const Shopping = (props: Props) => {
    return (
        <>
            <Container>
                <PageTitle title="I Nostri Articoli" />
                <ProductsList />
            </Container>
        </>
    )
}
export default Shopping
