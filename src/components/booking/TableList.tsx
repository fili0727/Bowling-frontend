import { useEffect, useState } from 'react'
import BookingLocation from '../../interfaces/BookingLocation'
import { getTablesApi } from '../../services/apiFacade'
import BookingLocationItem from './BookingLocationItem'
import '../../styling/activityList.css'
import DiningText from './DiningText'
import { Fade } from '@mui/material'

export default function TableList() {
    const [tables, setTables] = useState<BookingLocation[]>([])

    async function fetchData() {
        const tables = await getTablesApi()
        setTables(tables)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Fade in={true} timeout={1000}>
            <div className="activity-list-container">
                <DiningText />
                <ul className="activity-list">
                    {tables.map((table: BookingLocation) => (
                        <li className="activity-list-li" key={table.id}>
                            <BookingLocationItem bookingLocation={table} />
                        </li>
                    ))}
                </ul>
            </div>
        </Fade>
    )
}
