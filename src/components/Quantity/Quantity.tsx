import { Button, TextField } from '@mui/material'

type Props = {
    count: number
    onDecrement: () => void
    onIncrement: () => void
}
const Quantity = ({ count, onDecrement, onIncrement }: Props) => {
    return (
        <div>
            <Button
                variant="outlined"
                onClick={() => onDecrement()}
                disabled={count <= 1}
            >
                -
            </Button>
            <TextField size="small" value={count} />
            <Button
                variant="outlined"
                onClick={() => onIncrement()}
                disabled={count >= 9}
            >
                +
            </Button>
        </div>
    )
}
export default Quantity