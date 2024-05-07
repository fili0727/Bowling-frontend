import BookingLocation from '../../interfaces/BookingLocation'
import '../../styling/bookingLocation-item.css'

export default function BookingLocationItem({
    bookingLocation,
}: {
    bookingLocation: BookingLocation
}) {
    return (
        <div className="bookingLocation-item-container">
            <p>{bookingLocation.name}</p>
            <p>Max capacity: {bookingLocation.capacity}</p>
        </div>
    )
}
