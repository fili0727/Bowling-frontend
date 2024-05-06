enum Activity {
    BOWLING,
    AIRHOCKEY,
    DINING,
}

export default interface BookingLocation {
    id: number
    activity: Activity
    name: string
    isBooked: boolean
}
