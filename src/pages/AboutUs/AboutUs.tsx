import { Grid, Container } from '@mui/material'
import PageTitle from 'components/PageTitle/PageTitle'
import TeamCardItem from 'components/TeamCardItem/TeamCardItem'
import { teamArray } from 'utils/team'

type Props = {}
const AboutUs = (props: Props) => {
    return (
        <Container>
            <PageTitle title="Chi Siamo" />
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
