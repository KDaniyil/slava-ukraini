import { Typography } from '@mui/material'
import './PageTitle.scss'

type Props = {
    title: string
}
const PageTitle = ({ title }: Props) => {
    return (
        <>
            <Typography
                variant="h2"
                component="h2"
                align="center"
                textTransform="uppercase"
                className='page-title'
            >
                {title}
            </Typography>
        </>
    )
}
export default PageTitle
