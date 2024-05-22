import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    InputLabel,
    Select,
    TextField,
} from '@mui/material'
import { useState } from 'react'
import { StyledDialogTitle } from '../../styling/AirhockeyDialogStyling'

export default function ScheduleMaintenanceDialog({
    setDialogVisible,
    dialogVisible,
}: {
    setDialogVisible: (value: boolean) => void
    dialogVisible: boolean
}) {
    const [date, setDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')

    return (
        <Dialog open={dialogVisible}>
            <StyledDialogTitle>Schedule maintenance</StyledDialogTitle>
            <DialogContent>
                <TextField
                    label="Date"
                    value={date}
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    style={{ width: 250, marginTop: 20 }}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                />
                <br />
                <br />
                <TextField
                    type="time"
                    label="Start time"
                    style={{ width: 250 }}
                    variant="outlined"
                    onChange={(e) => setStartTime(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    value={startTime}
                />
                <br />
                <br />
                <TextField
                    type="time"
                    label="End time"
                    style={{ width: 250 }}
                    variant="outlined"
                    onChange={(e) => setEndTime(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    value={endTime}
                />
                <br />
                <br />
                <InputLabel>Activity</InputLabel>
                <Select style={{ width: 250 }}></Select>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setDialogVisible(false)}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}
