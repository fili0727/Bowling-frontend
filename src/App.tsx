import { Navigate, Route, Routes } from 'react-router-dom'
import BookingUI from './pages/BookingUI'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<BookingUI />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}
