import { useEffect, useState } from 'react'
import { getBookingsByActivityAndDate } from '../../services/apiFacade'
import Booking from '../../interfaces/Booking'
import OpeningHours from '../../interfaces/OpeningHours'

export default function AvailableSlot({
    activityType,
    date,
    openingHours,
}: {
    activityType: string
    date: string
    openingHours: OpeningHours[]
}) {
    const [existingBookings, setExistingBookings] = useState<Booking[]>([])
    const [bookingSlots, setBookingSlots] = useState<string[]>([])

    async function fetchData() {
        const bookings = await getBookingsByActivityAndDate(activityType, date)
        setExistingBookings(bookings)
        console.log(bookings)
    }

    useEffect(() => {
        fetchData()
        generateOpenSlots()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function generateOpenSlots() {
        openingHours.map((hours) => {
            const dayOfWeek = new Date(date).getDay()
            let dayOfWeekString

            switch (dayOfWeek) {
                case 0:
                    dayOfWeekString = 'SUNDAY'
                    break
                case 1:
                    dayOfWeekString = 'MONDAY'
                    break
                case 2:
                    dayOfWeekString = 'TUESDAY'
                    break
                case 3:
                    dayOfWeekString = 'WEDNESDAY'
                    break
                case 4:
                    dayOfWeekString = 'THURSDAY'
                    break
                case 5:
                    dayOfWeekString = 'FRIDAY'
                    break
                case 6:
                    dayOfWeekString = 'SATURDAY'
                    break
                default:
                    dayOfWeekString = ''
            }

            if (hours.dayOfWeek === dayOfWeekString) {
                generateBookingTimes(hours.openingTime, hours.closingTime)
            }
        })
    }

    function generateBookingTimes(openingTime: string, closingTime: string) {
        const slots = []

        for (
            let i = parseInt(openingTime);
            i + 2 <= parseInt(closingTime);
            i += 2
        ) {
            slots.push(`Booking time: ${i} - ${i + 2}`)
        }

        setBookingSlots(slots)
    }

    return (
        <div>
            {existingBookings.map((booking) => (
                <div key={booking.id}>
                    Existing booking:{booking.bookingTime.toString()}
                </div>
            ))}
            {bookingSlots.map((slot, index) => (
                <div key={index}>{slot}</div>
            ))}
        </div>
    )
}
