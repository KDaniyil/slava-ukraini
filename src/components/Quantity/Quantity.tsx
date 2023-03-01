import { Button, TextField } from '@mui/material'

type Props = {
    count: number
    onDecrement: () => void
    onIncrement: () => void
    minCount?: number
}
const Quantity = ({ count, onDecrement, onIncrement, minCount = 1 }: Props) => {
    return (
        <div>
            <Button
                variant="outlined"
                onClick={() => onDecrement()}
                disabled={count <= minCount}
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
