import ScheduleCalendar from '../components/schedule/ScheduleCalender'
import { Fade } from '@mui/material'

export default function Schedule() {
    return (
        <Fade in={true} timeout={1000}>
            <div>
                <h1>Schedule</h1>
                <ScheduleCalendar />
            </div>
        </Fade>
    )
}
