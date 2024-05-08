import { useEffect, useState } from 'react'
import BookingLocation from '../../interfaces/BookingLocation'
import { getAirhockeyApi } from '../../services/apiFacade'
import BookingLocationItem from './BookingLocationItem'
import AirhockeyText from './AirhockeyText'

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
        <div className="activity-list-container">
            <ul className="activity-list">
                <AirhockeyText />
                {airhockey.map((station: BookingLocation) => (
                    <li className="activity-list-li" key={station.id}>
                        <BookingLocationItem bookingLocation={station} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
