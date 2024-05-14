enum ActivityType {
    BOWLING,
    AIRHOCKEY,
    DINING,
}

export default interface BookingLocation {
    id: number
    activityType: ActivityType
    name: string
    capacity: number
}
