import { useEffect, useState } from 'react'
import BookingLocation from '../../interfaces/BookingLocation'
import { getTablesApi } from '../../services/apiFacade'
import BookingLocationItem from './BookingLocationItem'

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
        <div>
            <h1>Tables</h1>
            <p>Here you can see all tables</p>
            <ul>
                {tables.map((table: BookingLocation) => (
                    <li key={table.id}>
                        <BookingLocationItem bookingLocation={table} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
