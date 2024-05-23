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
import { useLocation } from 'react-router-dom'
import AdminPage from './pages/AdminLogin'

export default function App() {
    const location = useLocation();

    // Define routes that should not use the Layout component
    const noLayoutRoutes = ['/'];

    const shouldUseLayout = !noLayoutRoutes.includes(location.pathname);

    return (
        <>
            {shouldUseLayout ? (
                <Layout>
                    <Routes>
                        <Route path="/" element={<AdminPage />} />
                        <Route path="/booking" element={<BookingUI />} />
                        <Route path="*" element={<Navigate to="/" />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/bowling" element={<BowlingList />} />
                        <Route path="/dining" element={<TableList />} />
                        <Route path="/airhockey" element={<AirhockeyList />} />
                        <Route path="/bookings" element={<BookingOverview />} />
                        <Route path="/staff-schedule" element={<Schedule />} />
                        <Route path="/bookings-calender" element={<BookingsCalender />} />
                        <Route
                            path="/booking_confirmation"
                            element={<BookingConfirmation />}
                        />
                    </Routes>
                </Layout>
            ) : (
                <Routes>
                    <Route path="/" element={<AdminPage />} />
                    <Route path="/booking" element={<BookingUI />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/bowling" element={<BowlingList />} />
                    <Route path="/dining" element={<TableList />} />
                    <Route path="/airhockey" element={<AirhockeyList />} />
                    <Route path="/bookings" element={<BookingOverview />} />
                    <Route path="/staff-schedule" element={<Schedule />} />
                    <Route path="/bookings-calender" element={<BookingsCalender />} />
                    <Route
                        path="/booking_confirmation"
                        element={<BookingConfirmation />}
                    />
                </Routes>
            )}
        </>
    );
}