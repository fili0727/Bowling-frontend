import { useEffect, useState } from 'react'
import BookingLocation from '../../interfaces/BookingLocation'
import { getAirhockeyApi } from '../../services/apiFacade'
import BookingLocationItem from './BookingLocationItem'

export default function AirhockeyList() {
    const [airhockey, setAirhockey] = useState<BookingLocation[]>([])

    async function fetchData() {
        const stations = await getAirhockeyApi()
        setAirhockey(stations)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <h1>Airhockey</h1>
            <p>Here you can see all airhockey stations</p>
            <ul>
                {airhockey.map((station: BookingLocation) => (
                    <li key={station.id}>
                        <BookingLocationItem bookingLocation={station} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
