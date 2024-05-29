import { NavLink, useLocation } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import BookOnlineIcon from '@mui/icons-material/BookOnline'
import ExtensionIcon from '@mui/icons-material/Extension'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventIcon from '@mui/icons-material/Event';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import './styling/navBar.css'

export default function NavBar() {
    const location = useLocation()

    return (
        <nav className="nav-header">
            <ul className="nav-header-ul">
                <li
                    className={location.pathname === '/booking' ? 'active-header' : ''}
                >
                    <NavLink to="/booking">
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
                        location.pathname === '/equipment' ? 'active-header' : ''
                    }
                >
                    <NavLink to="/equipment">
                        <HomeRepairServiceIcon />
                        <p>Equipment</p>
                    </NavLink>
                </li>
                 <li
                    className={
                        location.pathname === '/bookings-calender' ? 'active-header' : ''
                    }
                >
                    <NavLink to="/bookings-calender">
                        <EventIcon />
                        <p>Bookings Caleneder</p>
                    </NavLink>
                </li>
               
            </ul>
        </nav>
    )
}
