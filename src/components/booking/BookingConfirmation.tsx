import { useLocation } from 'react-router-dom'
import { postBookingApi } from '../../services/apiFacade'
import Booking from '../../interfaces/Booking'
import { useState } from 'react'
import BookingLocation from '../../interfaces/BookingLocation'
import TimeSlot from '../../interfaces/TimeSlot'
import '../../styling/booking-confirmation.css'
import BookingDto from '../../interfaces/BookingDto'

interface BookingConfirmationState {
    slotItem: TimeSlot
    station: BookingLocation
    activityType: string
}

export default function BookingConfirmation() {
    const [confirmationText, setConfirmationText] = useState(false)
    const location = useLocation()
    const state = location.state as BookingConfirmationState
    const { station, activityType, slotItem } = state
    const booking = {
        BookingLocationId: station.id,
        amountOfPeople: 1,
        bookingTime: slotItem.dateTime,
    }

    async function confirmBooking(booking: BookingDto) {
        const newBooking: Booking = await postBookingApi(booking)
        setConfirmationText(true)
        console.log(newBooking)
    }

    return (
        <div className="booking-confirmation-container">
            <h1>Booking confirmation</h1>
            {!confirmationText && (
                <div className="booking-confirmation-info">
                    <p>Location: {station.name}</p>
                    <p>Activity type: {activityType}</p>
                    <p>
                        Booking time:{' '}
                        {new Date(slotItem.dateTime).toLocaleTimeString()}
                        <br></br>
                        {new Date(slotItem.dateTime).toLocaleDateString()}
                    </p>
                    <button onClick={() => confirmBooking(booking)}>
                        Confirm booking
                    </button>
                </div>
            )}
            {confirmationText && (
                <div className="confirmation-text-container">
                    <p>Your booking is confirmed</p>
                </div>
            )}
        </div>
    )
}
