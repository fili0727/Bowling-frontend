import Login from '../components/login/Login'
import BookingUI from './BookingUI'
import { useState } from 'react'
import '../styling/login.css'
import { Fade } from '@mui/material'
import '../styling/adminlogin.css'

export default function AdminPage() {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false)
    const [showLogin, setShowLogin] = useState<boolean>(false)
    const [showWelcome, setShowWelcome] = useState<boolean>(true)

    function checkLogin() {
        setLoggedIn(true)
    }

    function handleShowLogin() {
        setShowLogin(true)
        setShowWelcome(false)
    }

    return (
        <Fade in={true} timeout={1000}>
            <div className="adminPage-container">
                {!isLoggedIn ? (
                    <div className="adminPage-inner-container">
                        {showLogin && <Login checkLogin={checkLogin} />}
                    </div>
                ) : (
                    <div className="adminPage-inner-container">
                        <BookingUI />
                    </div>
                )}
                {showWelcome && (
                    <div
                        className="welcome-message"
                        style={{
                            position: 'absolute',
                            color: 'white',
                            fontSize: '20px',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: '#007BFF',
                            padding: '20px',
                            borderRadius: '10px',
                            boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
                        }}
                    >
                        <h1>Welcome to 'Big Bowl activity center' </h1>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                            }}
                        >
                            <p
                                style={{
                                    marginTop: '20px',
                                    fontWeight: 'lighter',
                                    marginLeft: '5vh',
                                    marginRight: '5vh',
                                }}
                            >
                                By logging into this page you can administrate
                                the bookings for the activity center. There are
                                2 login options. You can either login as a user
                                or as an admin. The admin can access the
                                schedules and everything else. The user can only
                                make bookings, search for bookings and sell
                                drinks.
                            </p>
                        </div>
                        <button
                            className="gotologin"
                            onClick={handleShowLogin}
                            style={{
                                backgroundColor: '#ff6347', // Tomato color
                                color: 'white', // White text
                                padding: '10px 20px', // Padding around the text
                                borderRadius: '5px', // Rounded corners
                                border: 'none', // Remove the default button border
                                cursor: 'pointer', // Change the cursor when hovering over the button
                                fontSize: '16px', // Increase the font size
                                marginTop: '20px', // Add some space above the button
                            }}
                        >
                            Go to login
                        </button>
                    </div>
                )}
            </div>
        </Fade>
    )
}
