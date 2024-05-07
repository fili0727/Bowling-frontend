import TableList from '../components/booking/TableList'
import table from '../assets/diningtable.jpg'
import airhockey from '../assets/airhockey.jpg'
import lane from '../assets/lanes.jpg'
import { useState } from 'react'
import AirhockeyList from '../components/booking/AirhockeyList'
import '../styling/bookingUI.css'
import BowlingList from '../components/booking/BowlingList'
import WelcomeText from '../components/booking/WelcomeText'

export default function BookingUI() {
    const [activeList, setActiveList] = useState<string>('welcome')

    function handleToggleList(listName: string) {
        setActiveList((prev) => (prev === listName ? 'welcome' : listName))
    }

    return (
        <div className="booking-ui-container">
            <div className="booking-ui-header">
                <h1>Activities</h1>
            </div>

            <div className="activity-buttons-container">
                <div className="activity-button-container">
                    <img
                        onClick={() => handleToggleList('dining')}
                        className="img-button"
                        src={table}
                    />
                </div>
                <div className="activity-button-container">
                    <img
                        onClick={() => handleToggleList('airhockey')}
                        className="img-button"
                        src={airhockey}
                    />
                </div>
                <div className="activity-button-container">
                    <img
                        onClick={() => handleToggleList('lane')}
                        className="img-button"
                        src={lane}
                    />
                </div>
            </div>
            {activeList === 'welcome' && <WelcomeText />}
            {activeList === 'dining' && <TableList />}
            {activeList === 'airhockey' && <AirhockeyList />}
            {activeList === 'lane' && <BowlingList />}
        </div>
    )
}
