import { useEffect, useState } from 'react'
import { getBookingsApi } from '../../services/apiFacade'
import BookingItem from './BookingItem'
import Booking from '../../interfaces/Booking'
import { API_URL } from '../../settings'

export default function BookingsList() {
    const [bookings, setBookings] = useState<Booking[]>([])

    async function fetchData() {
        console.log(API_URL)
        const bookings = await getBookingsApi()
        setBookings(bookings)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="activity-list-container">
            <ul className="activity-list">
                {bookings.map((booking: Booking) => (
                    <li className="activity-list-li" key={booking.id}>
                        <BookingItem booking={booking} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
