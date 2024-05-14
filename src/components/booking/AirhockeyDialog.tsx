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
import { useState } from 'react'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'

import '../../styling/airhockey-dialog.css'
import AvailableSlot from './AvailableSlot'

export default function StationDialog({
    station,
    openingHours,
    open,
    onClose,
}: StationDialogProps) {
    const today = new Date()
    const [startDate, setStartDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const next7dates: Date[] = []
    const daysOfWeek: string[] = [
        'SUNDAY',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY',
    ]

    for (let i = 0; i < 7; i++) {
        const date = new Date(startDate)
        date.setDate(date.getDate() + i)
        next7dates.push(date)
    }

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

    function handleDateClicked(date: Date) {
        setSelectedDate(date)
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <StyledDialogTitle>
                {station.name} <p>Max amount of players: {station.capacity}</p>{' '}
                <p>Air hockey</p>
            </StyledDialogTitle>
            {selectedDate == null && (
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
            )}
            {selectedDate == null && (
                <StyledDialogContent>
                    <div className="opening-hours-container">
                        {next7dates.map((date) => {
                            const dayOfWeek = daysOfWeek[date.getDay()]

                            return (
                                <div
                                    key={date.toDateString()}
                                    onClick={() => handleDateClicked(date)}
                                    className="opening-hours-day"
                                >
                                    <p>
                                        {dayOfWeek.substring(0, 1) +
                                            dayOfWeek
                                                .substring(1)
                                                .toLowerCase()}
                                    </p>
                                    <p>{date.toLocaleDateString()}</p>
                                </div>
                            )
                        })}
                    </div>
                </StyledDialogContent>
            )}
            {selectedDate != null && (
                <StyledDialogContent>
                    <Button onClick={() => setSelectedDate(null)}>
                        Back to dates
                    </Button>
                    <AvailableSlot
                        activityType="AIRHOCKEY"
                        date={selectedDate.toLocaleDateString()}
                        openingHours={openingHours}
                    />
                </StyledDialogContent>
            )}
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}
