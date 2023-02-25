import { Container } from '@mui/material'
import Logo from 'components/Logo/Logo'
import MenuIcons from 'components/MenuIcons/MenuIcons'
import './Footer.scss'
type Props = {}
const Footer = (props: Props) => {
    return (
        <div className="footer">
            <Container>
                <div className="footerMenu">
                    <Logo />
                    <MenuIcons />
                </div>
            </Container>
        </div>
    )
}
export default Footer
