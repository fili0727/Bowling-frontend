import { Navigate, Route, Routes } from 'react-router-dom'
import BookingUI from './pages/BookingUI'
import Layout from './Layout'
import Products from './pages/Products'

import BowlingList from './components/booking/BowlingList'
import TableList from './components/booking/TableList'
import AirhockeyList from './components/booking/AirhockeyList'
import BookingConfirmation from './components/booking/BookingConfirmation'
import BookingOverview from './pages/BookingOverview'
import Schedule from './pages/Schedule'
import BookingsCalender from './pages/BookingsCalender'
// import { useLocation } from 'react-router-dom'
import MaintenanceScheduling from './pages/MaintenanceScheduling'
import Admin from './pages/Admin'

export default function App() {
    // const location = useLocation()

    // // Define routes that should not use the Layout component
    // const noLayoutRoutes = ['/']

    // const shouldUseLayout = !noLayoutRoutes.includes(location.pathname)

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<BookingUI />} />
                <Route path="*" element={<Navigate to="/" />} />
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
            </Routes>
        </Layout>
    )
}
