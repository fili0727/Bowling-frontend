import TableList from '../components/booking/TableList'
import table from '../assets/diningtable.jpg'
import { useState } from 'react'

export default function BookingUI() {
    const [toggleDining, setToggleDining] = useState(false)

    function handleToggleDining() {
        setToggleDining((prev) => !prev)
    }

    return (
        <div className="booking-ui-container">
            <h1>Booking</h1>
            <p>Here you can book an activity</p>
            <div className="table-button-container">
                <img
                    onClick={handleToggleDining}
                    className="table-button"
                    src={table}
                />
            </div>
            {toggleDining && <TableList />}
        </div>
    )
}
