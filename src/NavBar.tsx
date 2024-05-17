import { NavLink, useLocation } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import BookOnlineIcon from '@mui/icons-material/BookOnline'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import ExtensionIcon from '@mui/icons-material/Extension'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './styling/navBar.css'

export default function NavBar() {
    const location = useLocation()

    return (
        <nav className="nav-header">
            <ul className="nav-header-ul">
                <li
                    className={location.pathname === '/' ? 'active-header' : ''}
                >
                    <NavLink to="/">
                        <ExtensionIcon />
                        <p>Activities</p>
                    </NavLink>
                </li>
                <li
                    className={
                        location.pathname === '/products' ? 'active-header' : ''
                    }
                >
                    <NavLink to="/products">
                        <ShoppingCartIcon />
                        <p>Products</p>
                    </NavLink>
                </li>
                <li
                    className={
                        location.pathname === '/bookings' ? 'active-header' : ''
                    }
                >
                    <NavLink to="/bookings">
                        <BookOnlineIcon />
                        <p>Bookings</p>
                    </NavLink>
                </li>
                  <li
                    className={
                        location.pathname === '/staff-schedule' ? 'active-header' : ''
                    }
                >
                    <NavLink to="/staff-schedule">
                        <CalendarMonthIcon />
                        <p>Staff Schedule</p>
                    </NavLink>
                </li>
                <li
                    className={
                        location.pathname.startsWith('/admin')
                            ? 'active-header'
                            : ''
                    }
                >
                
                    <NavLink to="/admin">
                        <AdminPanelSettingsIcon />
                        <p>Admin</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
