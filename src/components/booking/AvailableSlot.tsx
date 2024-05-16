import { useEffect, useState } from 'react'
import { getBookingsByActivityAndDate } from '../../services/apiFacade'
import Booking from '../../interfaces/Booking'
import OpeningHours from '../../interfaces/OpeningHours'
import '../../styling/availableslots.css'
import moment from 'moment'
import TimeSlot from '../../interfaces/TimeSlot'
import BookingLocation from '../../interfaces/BookingLocation'
import { useNavigate } from 'react-router-dom'

export default function AvailableSlot({
    activityType,
    date,
    openingHours,
    station,
}: {
    activityType: string
    date: string
    openingHours: OpeningHours[]
    station: BookingLocation
}) {
    const [availabeSlots, setAvailableSlots] = useState<TimeSlot[]>([])
    const navigate = useNavigate()

    async function fetchData() {
        const bookings = await getBookingsByActivityAndDate(activityType, date)
        generateOpenSlots(bookings)
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function generateOpenSlots(bookings: Booking[]) {
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
                generateOpenSlotsHelper(
                    hours.openingTime,
                    hours.closingTime,
                    bookings
                )
            }
        })
    }

    function generateOpenSlotsHelper(
        openingTime: string,
        closingTime: string,
        existingBookings: Booking[]
    ) {
        const slots = []

        for (
            let i = parseInt(openingTime);
            i + 2 <= parseInt(closingTime);
            i += 2
        ) {
            const startTime = i < 10 ? `0${i}:00:00` : `${i}:00:00`
            const dateTime =
                moment(date, 'MM/DD/YYYY').format('YYYY-MM-DD') +
                'T' +
                startTime

            const isBooked = existingBookings.some(
                (booking) =>
                    booking.bookingTime.toString() === dateTime &&
                    booking.bookingLocation.id === station.id
            )

            slots.push({
                slot: `Booking time: ${i} - ${i + 2}`,
                dateTime: dateTime,
                booked: isBooked,
            })
        }

        setAvailableSlots(slots)
    }

    function handleBookingSlotClicked(slotItem: TimeSlot) {
        if (!slotItem.booked) {
            navigate('/booking_confirmation', {
                state: { slotItem, station, activityType },
            })
        }
    }

    return (
        <div className="available-bookings-container">
            <div className="available-bookings-header">
                <h4>
                    {new Date(date).toLocaleDateString('en-US', {
                        weekday: 'long',
                    })}
                </h4>
                <h4>{date}</h4>
            </div>
            {availabeSlots.map((slotItem) => (
                <div
                    className={`available-booking-slot${
                        slotItem.booked ? '-booked' : ''
                    }`}
                    onClick={() => handleBookingSlotClicked(slotItem)}
                    key={slotItem.dateTime}
                >
                    {slotItem.slot}
                </div>
            ))}
        </div>
    )
}
