import { Container } from '@mui/material'
import FooterMenu from 'components/FooterMenu/FooterMenu'
import './Footer.scss'
type Props = {}
const Footer = (props: Props) => {
    return (
        <div className="footer">
            <Container>
                <FooterMenu />
            </Container>
        </div>
    )
}
export default Footer
