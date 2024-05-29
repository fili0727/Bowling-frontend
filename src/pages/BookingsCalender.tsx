import BookingsCalenderView from '../components/bookingsCalender/BookingsCalenderView'
import { Fade } from '@mui/material'

export default function BookingsCalender() {
    return (
        <Fade in={true} timeout={1000}>
            <div>
                <h1 style={{ textAlign: 'center' }}>Bookings Calendar</h1>
                <BookingsCalenderView />
            </div>
        </Fade>
    )
}
