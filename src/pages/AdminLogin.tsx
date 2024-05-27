import Login from "../components/Login/Login"
import BookingUI from "./BookingUI"
import { useState } from 'react';
import '../styling/login.css'


export default function AdminPage() {
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

    function checkLogin() {
        setLoggedIn(true);
    }

  return (
    <div className="adminPage-container">
       
        {!isLoggedIn ? (
            <div className="adminPage-inner-container">
                <Login checkLogin={checkLogin} />
            </div>
        ) : (
            <div className="adminPage-inner-container">
                <BookingUI />
            </div>
        )}
    </div>
);

}
