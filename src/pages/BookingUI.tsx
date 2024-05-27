import table from '../assets/diningtable.jpg'
import airhockey from '../assets/airhockey.jpg'
import lane from '../assets/lanes.jpg'
import '../styling/bookingUI.css'
import WelcomeText from '../components/booking/WelcomeText'
import { NavLink } from 'react-router-dom'
import { Fade } from '@mui/material'

export default function BookingUI() {
    return (
        <Fade in={true} timeout={1000}>
            <div className="booking-ui-container">
                <div className="booking-ui-header">
                    <h1>Activities</h1>
                </div>

                <div className="activity-buttons-container">
                    <div className="activity-button-container">
                        <NavLink to="/dining">
                            <img className="img-button" src={table} />
                        </NavLink>
                    </div>
                    <div className="activity-button-container">
                        <NavLink to="/airhockey">
                            <img className="img-button" src={airhockey} />
                        </NavLink>
                    </div>
                    <div className="activity-button-container">
                        <NavLink to="/bowling">
                            <img className="img-button" src={lane} />
                        </NavLink>
                    </div>
                </div>
                <WelcomeText />
            </div>
        </Fade>
    )
}
