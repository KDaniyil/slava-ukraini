import Logo from 'components/Logo/Logo'
import MenuIcons from 'components/MenuIcons/MenuIcons'
import './FooterMenu.scss'

type Props = {}
function FooterMenu({}: Props) {
    return (
        <div className="footerMenu">
            <Logo />
            <MenuIcons />
        </div>
    )
}
export default FooterMenu
