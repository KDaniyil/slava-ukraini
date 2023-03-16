import { Typography } from "@mui/material"
import PageTitle from "components/PageTitle/PageTitle"
import "./Donation.scss"

type Props = {}
const Donation = (props: Props) => {
    return <>
    <PageTitle title="Come puoi aiutarci"/>
    <Typography variant="h3" component="h5" textAlign="center"> Puoi effettuare la tua donazione tramite Bonifico bancario : <br /> IBAN IT45Y0103012260000002133202</Typography>
    <Typography variant="h3" component="h5" textAlign="center">Oppure stiamo sempre raccogliendo i medicinali e cibo per gli ospedali in Ucraina </Typography>
    <Typography variant="h4" component="h5" textAlign="center" className="donate-text"><span>"Non possiamo aiutare tutti, ma tutti possono aiutare qualcuno"</span> - Ronald Reagan. <br /> Questa citazione riflette il nostro atteggiamento nei confronti del volontariato</Typography>
    </>
}
export default Donation
