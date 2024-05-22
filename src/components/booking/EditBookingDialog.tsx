import { Button, Dialog, DialogActions, TextField } from '@mui/material'
import {
    StyledButton,
    StyledDialogContent,
    StyledDialogTitle,
} from '../../styling/AirhockeyDialogStyling'
import Booking from '../../interfaces/Booking'
import { useState, useEffect } from 'react'
import '../../styling/edit-booking-dialog.css'
import StationDialog from './AirhockeyDialog'
import {
    getAirhockeyHoursApi,
    updateBookingsApi,
} from '../../services/apiFacade'
import OpeningHours from '../../interfaces/OpeningHours'
import moment from 'moment'
import BookingEditDto from '../../interfaces/BookingEditDto'

export default function EditBookingDialog({
    booking,
    open,
    onClose,
    handleBookingUpdate,
}: {
    booking: Booking | null
    open: boolean
    onClose: () => void
    handleBookingUpdate: (id: number) => void
}) {
    const [name, setName] = useState('')
    const [participants, setParticipants] = useState('')
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
    const [openingHours, setOpeningHours] = useState<OpeningHours[]>([])
    const [dialogOpen, setDialogOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [editDate, setEditDate] = useState(booking?.bookingTime || '')

    useEffect(() => {
        if (booking) {
            setName(booking.name)
            setParticipants(booking.amountOfPeople.toString())
        }
    }, [booking])

    async function fetchData() {
        const openingHours = await getAirhockeyHoursApi()
        setOpeningHours(openingHours)
        setSelectedBooking(booking)
        setDialogOpen(true)
        setIsEditing(true)
    }

    function closeDialog() {
        setDialogOpen(false)
    }

    async function saveEditedBooking(
        participants: string,
        name: string,
        editDate: string
    ) {
        const bookingToSave: BookingEditDto = {
            id: booking?.id || 0,
            BookingLocationId: booking?.bookingLocation.id || 0,
            name: name,
            amountOfPeople: parseInt(participants),
            bookingTime: editDate,
        }

        await updateBookingsApi(bookingToSave)
        handleBookingUpdate(booking?.id || 0)
        onClose()
    }

    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <StyledDialogTitle>
                    <p>Edit booking</p>{' '}
                    {editDate == '' && (
                        <p>
                            {' '}
                            {`${moment(booking?.bookingTime).format(
                                'dddd, MMMM Do YYYY, HH:mm'
                            )} - ${moment(booking?.bookingTime)
                                .add(2, 'hours')
                                .format('HH:mm')}`}
                        </p>
                    )}
                    {editDate !== '' && (
                        <p>
                            {' '}
                            {`${moment(editDate).format(
                                'dddd, MMMM Do YYYY, HH:mm'
                            )} - ${moment(editDate)
                                .add(2, 'hours')
                                .format('HH:mm')}`}{' '}
                        </p>
                    )}
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
                </StyledDialogContent>
                <DialogActions>
                    <StyledButton onClick={fetchData}>
                        Change time or date
                    </StyledButton>
                    <Button onClick={onClose}>Close</Button>
                    <Button
                        onClick={() =>
                            saveEditedBooking(participants, name, editDate)
                        }
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
            {selectedBooking && (
                <StationDialog
                    station={selectedBooking.bookingLocation}
                    openingHours={openingHours}
                    open={dialogOpen}
                    onClose={closeDialog}
                    isEditing={isEditing}
                    setEditDate={setEditDate}
                />
            )}
        </>
    )
}
