import { Navigate, Route, Routes } from 'react-router-dom'
import BookingUI from './pages/BookingUI'
import Layout from './Layout'
import Products from './pages/Products'
import Admin from './pages/Admin'
import BowlingList from './components/booking/BowlingList'
import TableList from './components/booking/TableList'
import AirhockeyList from './components/booking/AirhockeyList'
import BookingConfirmation from './components/booking/BookingConfirmation'

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<BookingUI />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/products" element={<Products />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/bowling" element={<BowlingList />} />
                <Route path="/dining" element={<TableList />} />
                <Route path="/airhockey" element={<AirhockeyList />} />
                <Route
                    path="/booking_confirmation"
                    element={<BookingConfirmation />}
                />
            </Routes>
        </Layout>
    )
}
