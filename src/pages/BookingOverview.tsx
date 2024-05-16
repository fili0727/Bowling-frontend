import { useEffect, useState } from 'react'
import '../styling/bookings-overview.css'
import Booking from '../interfaces/Booking'
import { getBookingsApi } from '../services/apiFacade'
import moment from 'moment'

export default function BookingOverview() {
    const [bookings, setBookings] = useState<Booking[]>([])

    async function fetchBookings() {
        const bookingItems = await getBookingsApi()
        setBookings(bookingItems)
        console.log(bookingItems)
    }

    useEffect(() => {
        fetchBookings()
    }, [])

    return (
        <div className="bookings-overview-container">
            <div className="bookings-overview-header">
                <h1>Bookings</h1>
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
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
