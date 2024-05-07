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
        <div>
            <h1>Bookings List</h1>
            <p>Here you can see all bookings</p>
            <ul>
                {bookings.map((booking: Booking) => (
                    <li key={booking.id}>
                        <BookingItem booking={booking} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
