import BookingsList from '../components/BookingsList'

export default function BookingUI() {
    return (
        <div>
            <h1>Booking</h1>
            <p>
                Here you can book a location for an activity and see exising
                bookings
            </p>
            <BookingsList />
        </div>
    )
}
