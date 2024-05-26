import { useEffect, useState } from 'react'
import BookingLocation from '../../interfaces/BookingLocation'
import '../../styling/bookingLocation-item.css'

export default function BookingLocationItem({
    bookingLocation,
}: {
    bookingLocation: BookingLocation
}) {
    const [kidsLane, setKidsLane] = useState(false)
    const [isBowling, setIsBowling] = useState(false)
    const [isAirhockey, setIsAirhockey] = useState(false)
    const [isDining, setIsDining] = useState(false)

    useEffect(() => {
        if (bookingLocation.name.includes('Lane')) {
            setIsBowling(true)
        } else if (bookingLocation.name.includes('Station')) {
            setIsAirhockey(true)
        } else if (bookingLocation.name.includes('Table')) {
            setIsDining(true)
        }

        if (
            bookingLocation.name === 'Lane 1' ||
            bookingLocation.name === 'Lane 2' ||
            bookingLocation.name === 'Lane 3' ||
            bookingLocation.name === 'Lane 4'
        ) {
            setKidsLane(true)
        } else {
            setKidsLane(false)
        }
    }, [bookingLocation])

    console.log(bookingLocation.name)

    return (
        <div className="bookingLocation-item-container">
            <p>{bookingLocation.name}</p>
            {isBowling && <p>Capacity: {bookingLocation.capacity}</p>}
            {isAirhockey && <p>Hockey sticks: {bookingLocation.capacity}</p>}
            {isDining && <p>Seats: {bookingLocation.capacity}</p>}
            {kidsLane && (
                <p
                    style={{
                        color: 'blue',
                        position: 'absolute',
                        right: '39px',
                        fontSize: '0.8rem',
                    }}
                >
                    *Suited for children
                </p>
            )}
        </div>
    )
}
