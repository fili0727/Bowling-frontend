import { useEffect, useState } from 'react'
import BookingLocation from '../../interfaces/BookingLocation'
import { getAirhockeyApi, getAirhockeyHoursApi } from '../../services/apiFacade'
import BookingLocationItem from './BookingLocationItem'
import AirhockeyText from './AirhockeyText'
import { Fade } from '@mui/material'
import OpeningHours from '../../interfaces/OpeningHours'
import StationDialog from './AirhockeyDialog'

export default function AirhockeyList() {
    const [airhockey, setAirhockey] = useState<BookingLocation[]>([])
    const [openingHours, setOpeningHours] = useState<OpeningHours[]>([])
    const [dialogOpen, setDialogOpen] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [selectedStation, setSelectedStation] =
        useState<BookingLocation | null>(null)

    async function fetchData() {
        const openingHours = await getAirhockeyHoursApi()
        const stations = await getAirhockeyApi()
        setAirhockey(stations)
        setOpeningHours(openingHours)
        setIsEditing(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    function showInfo(station: BookingLocation) {
        setSelectedStation(station)
        setDialogOpen(true)
    }

    function closeDialog() {
        setDialogOpen(false)
    }

    return (
        <>
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
                                <BookingLocationItem
                                    bookingLocation={station}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </Fade>
            {selectedStation && (
                <StationDialog
                    station={selectedStation}
                    openingHours={openingHours}
                    open={dialogOpen}
                    onClose={closeDialog}
                    isEditing={isEditing}
                    setEditDate={() => {}}
                />
            )}
        </>
    )
}
