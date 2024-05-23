import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    FormControl,
    InputLabel,
    OutlinedInput,
    Select,
    TextField,
    MenuItem,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { StyledDialogTitle } from '../../styling/AirhockeyDialogStyling'
import {
    createMaintenanceItemApi,
    getBookingLocationsApi,
} from '../../services/apiFacade'
import BookingLocation from '../../interfaces/BookingLocation'
import moment from 'moment'
import MaintenanceDto from '../../interfaces/MaintenanceDto'

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
    const [locations, setLocations] = useState<BookingLocation[]>([])
    const [selectedLocation, setSelectedLocation] = useState('')
    const [errorMessage, setErrorMessage] = useState(false)

    async function fetchLocations() {
        const locations = await getBookingLocationsApi()
        setLocations(locations)
    }

    async function handleSave() {
        if (!date || !startTime || !endTime || !selectedLocation) {
            setErrorMessage(true)
            return
        }

        const formattedDate = moment(date).format('YYYY-MM-DD')

        const maintenance: MaintenanceDto = {
            date: formattedDate,
            startTime,
            endTime,
            bookingLocationId: selectedLocation,
        }
        await createMaintenanceItemApi(maintenance)
        setDialogVisible(false)
    }

    useEffect(() => {
        fetchLocations()
    }, [])

    return (
        <Dialog open={dialogVisible}>
            <StyledDialogTitle>Schedule maintenance</StyledDialogTitle>
            {errorMessage && (
                <p className="error-message-maintenance">
                    Please fill out all fields
                </p>
            )}
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
                <FormControl variant="outlined" style={{ width: 250 }}>
                    <InputLabel htmlFor="location-label">Location</InputLabel>
                    <Select
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        input={
                            <OutlinedInput
                                label="Location"
                                id="location-label"
                            />
                        }
                    >
                        {locations.map((location) => (
                            <MenuItem key={location.id} value={location.id}>
                                {location.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setDialogVisible(false)}>Close</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    )
}
