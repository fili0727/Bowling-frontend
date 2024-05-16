import { Button, Dialog, DialogActions, TextField } from '@mui/material'
import {
    StyledDialogContent,
    StyledDialogTitle,
} from '../../styling/AirhockeyDialogStyling'
import Booking from '../../interfaces/Booking'
import { useState, useEffect } from 'react'
import '../../styling/edit-booking-dialog.css'

export default function EditBookingDialog({
    booking,
    open,
    onClose,
}: {
    booking: Booking | null
    open: boolean
    onClose: () => void
}) {
    const [name, setName] = useState('')
    const [participants, setParticipants] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {
        if (booking) {
            setName(booking.name)
            setParticipants(booking.amountOfPeople.toString())
            setDate(booking.bookingTime.toString())
        }
    }, [booking])

    return (
        <Dialog open={open} onClose={onClose}>
            <StyledDialogTitle>
                <p>Edit booking</p>
            </StyledDialogTitle>
            <StyledDialogContent>
                <div className="edit-booking-dialog-content-header">
                    <p>
                        {booking
                            ? booking.bookingLocation.activityType
                                  .toLocaleString()
                                  .substring(0, 1) +
                              booking.bookingLocation.activityType
                                  .toLocaleString()
                                  .substring(1)
                                  .toLowerCase()
                            : ''}
                    </p>
                    <p>{booking?.bookingLocation.name}</p>
                </div>
                <TextField
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: 250 }}
                />
                <br />
                <br />
                <TextField
                    label="Participants"
                    value={participants}
                    onChange={(e) => setParticipants(e.target.value)}
                    style={{ width: 250 }}
                />
                <br />
                <br />
                <TextField
                    label="Date"
                    type="datetime-local"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={{ width: 250 }}
                />
            </StyledDialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
                <Button>Save</Button>
            </DialogActions>
        </Dialog>
    )
}
