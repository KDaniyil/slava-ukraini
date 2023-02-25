import { Typography, Grid, Container } from '@mui/material'
import TeamCardItem from 'components/TeamCardItem/TeamCardItem'
import { teamArray } from 'utils/team'

type Props = {}
const AboutUs = (props: Props) => {
    return (
        <Container>
            <Typography
                variant="h2"
                component="h2"
                align="center"
                sx={{ marginTop: '50px', marginBottom: '30px' }}
            >
                Chi Siamo
            </Typography>
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
