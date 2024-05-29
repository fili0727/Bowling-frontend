import { useEffect, useState } from 'react'
import '../styling/bookings-overview.css'
import Booking from '../interfaces/Booking'
import {
    deleteBookingByIdApi,
    getBookingByIdApi,
    getBookingsApi,
} from '../services/apiFacade'
import moment from 'moment'
import EditBookingDialog from '../components/booking/EditBookingDialog'
import { Fade } from '@mui/material'

export default function BookingOverview() {
    const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [bookings, setBookings] = useState<Booking[]>([])
    const [searchInput, setSearchInput] = useState('')
    const filteredBookings = bookings.filter((booking) =>
        booking.name.toLowerCase().includes(searchInput.toLowerCase())
    )

    async function getUpdatedBooking(id: number) {
        const updatedBooking = await getBookingByIdApi(id)

        if (updatedBooking) {
            const updatedBookings = bookings.map((booking) =>
                booking.id === id ? updatedBooking : booking
            )
            setBookings(updatedBookings)
        }
    }

    function handleBookingUpdate(id: number) {
        getUpdatedBooking(id)
    }

    function closeDialog() {
        setDialogOpen(false)
    }

    function openDialog(booking: Booking) {
        setDialogOpen(true)
        setSelectedBooking(booking)
    }

    async function fetchBookings() {
        const bookingItems = await getBookingsApi()
        setBookings(bookingItems)
    }

    async function deleteBooking(id: number) {
        await deleteBookingByIdApi(id)
        const updatedBookings = bookings.filter((booking) => booking.id !== id)
        setBookings(updatedBookings)
    }

    useEffect(() => {
        fetchBookings()
    }, [])

    return (
        <Fade in={true} timeout={1000}>
            <div className="bookings-overview-container">
                <div className="bookings-overview-header">
                    <h1>Bookings</h1>
                    <input
                        type="text"
                        placeholder="Find by name"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </div>
                <div className="bookings-overview-content">
                    <table className="bookings-overview-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Booking Time</th>
                                <th>Participants</th>
                                <th>Activity</th>
                                <th>Location</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBookings.map((booking) => (
                                <tr key={booking.id}>
                                    <td>{booking.name}</td>
                                    <td>
                                        {`${moment(booking.bookingTime).format(
                                            'dddd, MMMM Do YYYY, HH:mm'
                                        )} - ${moment(booking.bookingTime)
                                            .add(2, 'hours')
                                            .format('HH:mm')}`}
                                    </td>
                                    <td>{booking.amountOfPeople}</td>
                                    <td>
                                        {booking.bookingLocation.activityType
                                            .toLocaleString()
                                            .substring(0, 1) +
                                            booking.bookingLocation.activityType
                                                .toLocaleString()
                                                .substring(1)
                                                .toLowerCase()}
                                    </td>
                                    <td>{booking.bookingLocation.name}</td>
                                    <td>
                                        <div className="booking-overview-button-container">
                                            <button
                                                onClick={() =>
                                                    openDialog(booking)
                                                }
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => {
                                                    if (
                                                        window.confirm(
                                                            'Are you sure you want to delete this booking?'
                                                        )
                                                    ) {
                                                        deleteBooking(
                                                            booking.id
                                                        )
                                                    }
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {dialogOpen && (
                    <EditBookingDialog
                        booking={selectedBooking}
                        open={dialogOpen}
                        onClose={closeDialog}
                        handleBookingUpdate={handleBookingUpdate}
                    />
                )}
            </div>
        </Fade>
    )
}
