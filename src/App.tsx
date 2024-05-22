import { Navigate, Route, Routes } from 'react-router-dom'
import BookingUI from './pages/BookingUI'
import Layout from './Layout'
import Products from './pages/Products'
import Admin from './pages/Admin'
import BowlingList from './components/booking/BowlingList'
import TableList from './components/booking/TableList'
import AirhockeyList from './components/booking/AirhockeyList'
import BookingConfirmation from './components/booking/BookingConfirmation'
import BookingOverview from './pages/BookingOverview'
import Schedule from './pages/Schedule'
import BookingsCalender from './pages/BookingsCalender'
import MaintenanceScheduling from './pages/MaintenanceScheduling'

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<BookingUI />} />

                <Route path="/products" element={<Products />} />
                <Route path="/admin" element={<Admin />}>
                    <Route
                        path="maintenance"
                        element={<MaintenanceScheduling />}
                    />
                </Route>
                <Route path="/bowling" element={<BowlingList />} />
                <Route path="/dining" element={<TableList />} />
                <Route path="/airhockey" element={<AirhockeyList />} />
                <Route path="/bookings" element={<BookingOverview />} />
                <Route path="/staff-schedule" element={<Schedule />} />
                <Route
                    path="/bookings-calender"
                    element={<BookingsCalender />}
                />

                <Route
                    path="/booking_confirmation"
                    element={<BookingConfirmation />}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Layout>
    )
}
