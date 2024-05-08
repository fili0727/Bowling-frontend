import Dialog from '@mui/material/Dialog'
import {
    StyledDialogTitle,
    StyledDialogContent,
    StyledButton,
    StyledDialogActions,
} from '../../styling/AirhockeyDialogStyling'

import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import StationDialogProps from '../../interfaces/props/StationDialogProps'
import { useEffect, useState } from 'react'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import Booking from '../../interfaces/Booking'
import { getAirhockeyBookingsApi } from '../../services/apiFacade'

export default function StationDialog({
    station,
    openingHours,
    open,
    onClose,
}: StationDialogProps) {
    const [startDate, setStartDate] = useState(new Date())
    const [bookingItems, setBookingItems] = useState<Booking[]>([])

    const daysOfWeek: string[] = [
        'SUNDAY',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY',
    ]

    // Create an array of the next 7 dates starting from today
    const next7dates = []
    for (let i = 0; i < 7; i++) {
        const date = new Date(startDate)
        date.setDate(date.getDate() + i)
        next7dates.push(date)
    }

    async function fetchData() {
        const bookings = await getAirhockeyBookingsApi()
        setBookingItems(bookings)
    }

    useEffect(() => {
        fetchData()
    }, [])

    function handleNextClick() {
        const newStartDate = new Date(startDate)
        newStartDate.setDate(newStartDate.getDate() + 7)
        setStartDate(newStartDate)
    }

    function handlePrevClick() {
        const newStartDate = new Date(startDate)
        newStartDate.setDate(newStartDate.getDate() - 7)
        setStartDate(newStartDate)
    }

    // Get today's date at the start of the day
    const today = new Date()

    return (
        <Dialog open={open} onClose={onClose}>
            <StyledDialogTitle>
                {station.name} <p>Max amount of players: {station.capacity}</p>
            </StyledDialogTitle>
            <StyledDialogActions>
                {startDate > today && (
                    <StyledButton onClick={handlePrevClick}>
                        <ArrowBackIos />
                    </StyledButton>
                )}
                <StyledButton onClick={handleNextClick}>
                    <ArrowForwardIos />
                </StyledButton>
            </StyledDialogActions>
            <StyledDialogContent>
                {next7dates.map((date) => {
                    const dayOfWeek = daysOfWeek[date.getDay()]
                    const hours = openingHours.find(
                        (hours) => hours.dayOfWeek === dayOfWeek
                    )

                    if (!hours) {
                        return null // or some fallback UI
                    }

                    const [openHour, openMinute] = hours.openingTime.split(':')
                    const [closeHour, closeMinute] =
                        hours.closingTime.split(':')

                    const formattedOpenTime = `${openHour}:${openMinute}`
                    const formattedCloseTime = `${closeHour}:${closeMinute}`

                    return (
                        <p key={date.toString()}>
                            {date.toLocaleDateString()}:{' '}
                            {dayOfWeek.substring(0, 1)}
                            {dayOfWeek.substring(1).toLocaleLowerCase()}{' '}
                            {formattedOpenTime} -{formattedCloseTime}
                        </p>
                    )
                })}
            </StyledDialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}
