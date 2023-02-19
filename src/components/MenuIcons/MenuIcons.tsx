import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import './MenuIcons.scss'
type Props = {}
function MenuIcons({}: Props) {
    return (
        <div className="menu-icons">
            <FacebookIcon className="icon-fb" fontSize="large" />
            <InstagramIcon className="icon-insta" fontSize="large" />
        </div>
    )
}
export default MenuIcons
