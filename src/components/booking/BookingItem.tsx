import Booking from '../../interfaces/Booking'

export default function BookingItem({ booking }: { booking: Booking }) {
    // Convert bookingTime to a Date object
    const bookingDate = new Date(booking.bookingTime)

    // Format the date and time
    const formattedDate = `${bookingDate.getFullYear()}-${
        bookingDate.getMonth() + 1
    }-${bookingDate.getDate()}`
    const formattedTime = `${bookingDate.getHours()}:${bookingDate.getMinutes()}`

    return (
        <div className="booking-container">
            <h1>Booking Item</h1>
            <p>Here you can see a single booking</p>
            <p>Booking ID: {booking.id}</p>
            <p>Booking Location: {booking.bookingLocation.name}</p>
            <p>Booking Activity: {booking.bookingLocation.activity.name}</p>
            <p>Amount of People: {booking.amountOfPeople}</p>
            <p>Booking Date: {formattedDate}</p>
            <p>Booking Time: {formattedTime}</p>
        </div>
    )
}
