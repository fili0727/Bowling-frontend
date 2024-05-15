import { NavLink, useLocation } from 'react-router-dom'
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
    const [amountOfPeople, setAmountOfPeople] = useState<number>(1)
    const [bookingName, setBookingName] = useState<string>('')
    const location = useLocation()
    const state = location.state as BookingConfirmationState
    const { station, activityType, slotItem } = state
    const booking = {
        BookingLocationId: station.id,
        amountOfPeople: amountOfPeople,
        bookingTime: slotItem.dateTime,
        name: bookingName,
    }

    async function confirmBooking(newBooking: BookingDto) {
        const newBookingItem: Booking = await postBookingApi(newBooking)
        setConfirmationText(true)
        console.log(newBookingItem)
    }

    function handlePeopleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAmountOfPeople(Number(e.target.value))
    }

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setBookingName(e.target.value)
    }

    return (
        <div className="booking-confirmation-container">
            {!confirmationText && <h1>Review booking</h1>}
            {confirmationText && <h1>Booking completed</h1>}
            {amountOfPeople > station.capacity && (
                <p className="confirmation-error">
                    Max participants is {station.capacity}
                </p>
            )}
            {!confirmationText && (
                <div className="booking-confirmation-info">
                    <div className="booking-confirmation-info-top">
                        <div className="booking-confirmation-info-item">
                            <h3 className="h3-booking-confirmation">
                                Participants:
                            </h3>
                            <input
                                className="input-booking-confirmation"
                                type="number"
                                value={amountOfPeople}
                                onChange={handlePeopleChange}
                                min="1"
                                max={station.capacity}
                                required
                                style={{ width: '15vh' }}
                            />
                        </div>
                        <div className="booking-confirmation-info-item">
                            <h3 className="h3-booking-confirmation">
                                Name on booking:
                            </h3>
                            <input
                                className="input-booking-confirmation"
                                type="text"
                                value={bookingName}
                                onChange={handleNameChange}
                                required
                                style={{
                                    width: '15vh',
                                }}
                            />
                        </div>
                    </div>
                    <div className="booking-confirmation-info-top">
                        <div className="booking-confirmation-info-item">
                            <h3 className="h3-booking-confirmation">
                                Location:
                            </h3>
                            <p> {station.name}</p>
                        </div>
                        <div className="booking-confirmation-info-item">
                            <h3 className="h3-booking-confirmation">
                                Activity:
                            </h3>
                            <p>
                                {activityType.substring(0, 1) +
                                    activityType
                                        .substring(1)
                                        .toLocaleLowerCase()}
                            </p>
                        </div>
                    </div>
                    <div className="booking-confirmation-info-bottom">
                        <div className="booking-confirmation-info-item">
                            <h3 className="h3-booking-confirmation">
                                Booking time and date:
                            </h3>
                            <p className="p-booking-confirmation">
                                {new Date(slotItem.dateTime).getHours() + ':00'}{' '}
                                until{' '}
                                {new Date(slotItem.dateTime).getHours() +
                                    2 +
                                    ':00'}
                            </p>
                            <p>
                                {new Date(
                                    slotItem.dateTime
                                ).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                    <button
                        className="confirm-booking-button"
                        onClick={() => confirmBooking(booking)}
                        disabled={amountOfPeople > station.capacity}
                    >
                        Confirm booking
                    </button>
                </div>
            )}
            {confirmationText && (
                <div className="confirmation-text-container">
                    <p>
                        For further details navigate to{' '}
                        <NavLink to="/bookings">bookings</NavLink> and search
                        for the booking name:
                    </p>
                    <h3>"{bookingName}"</h3>
                </div>
            )}
        </div>
    )
}
