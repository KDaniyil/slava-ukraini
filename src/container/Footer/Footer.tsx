import { Container } from '@mui/material'
import ContactsDetails from 'components/ContactsDetails/ContactsDetails'
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
                    <div className='donation-details'>Puoi fare la tua donazione qua: <br /> Slava Ukraini OdV <br /> IBAN IT45Y0103012260000002133202</div>
                    <ContactsDetails nameOfClass='footer-list'/>
                    <MenuIcons />
                </div>
            </Container>
        </div>
    )
}
export default Footer
