import { useEffect, useState } from 'react'
import BookingLocation from '../../interfaces/BookingLocation'
import { getBookingLocationsApi } from '../../services/apiFacade'
import BookingLocationItem from './BookingLocationItem'

export default function BookingLocationList() {
    const [bookingLocations, setBookingLocations] = useState<BookingLocation[]>(
        []
    )

    async function fetchData() {
        const bookingLocations = await getBookingLocationsApi()
        setBookingLocations(bookingLocations)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h1>Booking Locations</h1>
            <p>Here you can see all booking locations</p>
            <ul>
                {bookingLocations.map((bookingLocation: BookingLocation) => (
                    <li key={bookingLocation.id}>
                        <BookingLocationItem
                            bookingLocation={bookingLocation}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
