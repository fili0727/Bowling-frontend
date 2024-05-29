import { NavLink, Outlet } from 'react-router-dom'
import { Fade } from '@mui/material'
import '../styling/admin.css'
import { useState } from 'react'

export default function Admin() {
    const [show, setShow] = useState(true)

    function handleShow() {
        if (show === false) {
            return
        }
        setShow(false)
    }

    return (
        <Fade in={true} timeout={1000}>
            <div className="admin-container">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1 style={{ marginTop: '15vh', fontSize: '8vh' }}>
                        Admin
                    </h1>
                </div>
                <div className="button-container-admin">
                    <div>
                        <button onClick={handleShow}>
                            <NavLink to="maintenance-schedule">
                                Go to maintenance schedule
                            </NavLink>
                        </button>
                    </div>
                    <div>
                        <button onClick={handleShow}>
                            <NavLink to="staff-schedule">
                                Go to staff schedule
                            </NavLink>
                        </button>
                    </div>
                    <div>
                        <button onClick={handleShow}>
                            <NavLink to="booking-schedule">
                                Go to booking schedule
                            </NavLink>
                        </button>
                    </div>
                </div>
                {show && (
                    <div className="admin-text-container">
                        <p>
                            This page contains all the functions that are
                            strictly for the administrator of the activity
                            center. If you want to see maintenance, click that.
                            If you want to see staff schedules, click that. If
                            you want to see booking schedules, click that. You
                            can do it all on this page if you are an admin.
                        </p>
                    </div>
                )}
                <Outlet />
            </div>
        </Fade>
    )
}
