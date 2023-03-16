import { Container, Typography } from "@mui/material"
import PageTitle from "components/PageTitle/PageTitle"
import "./Contacts.scss"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

type Props = {}
const Contacts = ({}: Props) => {
    return <>
    <Container>
        <PageTitle title="I nostri Contatti"/>
        <Typography textAlign="center" variant="h4" component="h4">SLAVA UKRAINI ODV</Typography>
        <ul className="contacts">
            <li className="address"><LocationOnOutlinedIcon fontSize="small"/> CORSO DEL POPOLO 84 45100 ROVIGO Italia</li>
            <li className="email"><LocalPostOfficeOutlinedIcon fontSize="small"/> slavaukrainiodv@gmail.com</li>
            <li className="phone"><LocalPhoneOutlinedIcon fontSize="small"/> +39 380 791 4144</li>
        </ul>
    </Container>
    </>
}
export default Contacts
