import { useEffect, useState } from 'react'
import { getBookingsByActivityAndDate } from '../../services/apiFacade'
import Booking from '../../interfaces/Booking'

export default function AvailableSlot({
    activityType,
    date,
}: {
    activityType: string
    date: string
}) {
    const [existingBookings, setExistingBookings] = useState<Booking[]>([])

    async function fetchData() {
        const bookings = await getBookingsByActivityAndDate(activityType, date)
        setExistingBookings(bookings)

        console.log(bookings)
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            {existingBookings.map((booking) => (
                <div key={booking.id}>
                    Existing booking:{booking.bookingTime.toString()}
                </div>
            ))}
        </div>
    )
}
