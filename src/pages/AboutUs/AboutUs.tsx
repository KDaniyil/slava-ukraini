import { Grid, Container, Typography } from '@mui/material'
import PageTitle from 'components/PageTitle/PageTitle'
import TeamCardItem from 'components/TeamCardItem/TeamCardItem'
import { teamArray } from 'utils/team'
import "./AboutUs.scss"

type Props = {}
const AboutUs = (props: Props) => {
    return (
        <Container>
            <PageTitle title="Chi Siamo" />
            <Typography variant='h4' component="h4" className='about-us-text'> Slava Ukraini OdV (Gloria all'Ucraina) è un'organizzazione di volontariato creata in Italia dagli ucraini nel 2022, un momento difficile per l'Ucraina, quando il nostro Paese ha più che mai bisogno di aiuto.</Typography>
            <Typography variant='h3' component="h3" className='about-us-subtitle'>Il nostro Team</Typography>
            <Grid container spacing={3} justifyContent="center">
                {teamArray.map((person) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={person.id}>
                            <TeamCardItem person={person} />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}
export default AboutUs
