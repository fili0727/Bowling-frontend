import { useEffect, useState } from 'react'
import BookingLocation from '../../interfaces/BookingLocation'
import { getLanesApi } from '../../services/apiFacade'
import BookingLocationItem from './BookingLocationItem'

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
        <div>
            <h1>Bowling</h1>
            <p>Here you can see all bowling lanes</p>
            <ul>
                {lanes.map((lane: BookingLocation) => (
                    <li key={lane.id}>
                        <BookingLocationItem bookingLocation={lane} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
