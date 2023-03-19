import { Container, Typography } from "@mui/material"
import PageTitle from "components/PageTitle/PageTitle"
import ContactsDetails from "components/ContactsDetails/ContactsDetails";

type Props = {}
const Contacts = ({}: Props) => {
    return <div>
    <Container>
        <PageTitle title="I nostri Contatti"/>
        <Typography textAlign="center" variant="h4" component="h4">SLAVA UKRAINI ODV</Typography>
        <ContactsDetails/>
    </Container>
    </div>
}
export default Contacts
