import { NavLink, Outlet } from 'react-router-dom'
import { Fade } from '@mui/material'

export default function Admin() {
    return (
        <Fade in={true} timeout={1000}>
            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1 style={{ marginTop: '15vh', fontSize: '8vh' }}>
                        Admin
                    </h1>
                </div>
                <div
                    style={{
                        position: 'absolute',
                        display: 'flex',
                        gap: '5vh',
                        right: '69vh',
                        top: '27vh',
                    }}
                >
                    <div>
                        <button>
                            <NavLink to="maintenance-schedule">
                                Go to maintenance
                            </NavLink>
                        </button>
                    </div>
                    <div>
                        <button>
                            <NavLink to="staff-schedule">
                                Go to staff schedule
                            </NavLink>
                        </button>
                    </div>
                    <div>
                        <button>
                            <NavLink to="booking-schedule">
                                Go to booking schedule
                            </NavLink>
                        </button>
                    </div>
                </div>
                <Outlet />
            </div>
        </Fade>
    )
}
