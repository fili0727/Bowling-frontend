import { Navigate, Route, Routes } from 'react-router-dom'
import BookingUI from './pages/BookingUI'
import Layout from './Layout'
import Products from './pages/Products'
import Admin from './pages/Admin'


export default function App() {
    return (
        <Layout>
        <Routes>
            <Route path="/" element={<BookingUI />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/products" element={<Products />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
        </Layout>
    )
}
