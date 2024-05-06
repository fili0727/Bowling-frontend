import Booking from '../interfaces/Booking'

export default function BookingItem({ booking }: { booking: Booking }) {
    return (
        <div className="booking-container">
            <h1>Booking Item</h1>
            <p>Here you can see a single booking</p>
            <p>Booking ID: {booking.id}</p>
            <p>Booking Location: {booking.bookingLocation.name}</p>
            <p>Amount of People: {booking.amountOfPeople}</p>
        </div>
    )
}
