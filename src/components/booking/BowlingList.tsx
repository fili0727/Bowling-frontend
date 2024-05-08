import { useEffect, useState } from 'react'
import BookingLocation from '../../interfaces/BookingLocation'
import { getLanesApi } from '../../services/apiFacade'
import BookingLocationItem from './BookingLocationItem'
import BowlingText from './BowlingText'

export default function BowlingList() {
    const [lanes, setLanes] = useState<BookingLocation[]>([])

    async function fetchData() {
        const bowling = await getLanesApi()
        setLanes(bowling)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="activity-list-container">
            <BowlingText />
            <ul className="activity-list">
                {lanes.map((lane: BookingLocation) => (
                    <li className="activity-list-li" key={lane.id}>
                        <BookingLocationItem bookingLocation={lane} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
