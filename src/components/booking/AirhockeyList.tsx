import { useEffect, useState } from 'react'
import BookingLocation from '../../interfaces/BookingLocation'
import { getAirhockeyApi, getAirhockeyHoursApi } from '../../services/apiFacade'
import BookingLocationItem from './BookingLocationItem'
import AirhockeyText from './AirhockeyText'
import { Fade } from '@mui/material'
import OpeningHours from '../../interfaces/OpeningHours'

export default function AirhockeyList() {
    const [airhockey, setAirhockey] = useState<BookingLocation[]>([])
    const [openingHours, setOpeningHours] = useState<OpeningHours[]>([])

    async function fetchData() {
        const openingHours = await getAirhockeyHoursApi()
        const stations = await getAirhockeyApi()
        setAirhockey(stations)
        setOpeningHours(openingHours)
    }

    useEffect(() => {
        fetchData()
    }, [])

    function showInfo(station: BookingLocation) {
        console.log(station)
        console.log(openingHours)
    }

    return (
        <Fade in={true} timeout={1000}>
            <div className="activity-list-container">
                <ul className="activity-list">
                    <AirhockeyText />
                    {airhockey.map((station: BookingLocation) => (
                        <li
                            onClick={() => showInfo(station)}
                            className="activity-list-li"
                            key={station.id}
                        >
                            <BookingLocationItem bookingLocation={station} />
                        </li>
                    ))}
                </ul>
            </div>
        </Fade>
    )
}
