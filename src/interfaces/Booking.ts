import BookingLocation from './BookingLocation'

export default interface Booking {
    id: number
    bookingLocation: BookingLocation
    amountOfPeople: number
    bookingTime: Date
    name: string
}
