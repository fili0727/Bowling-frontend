enum DayOfWeek {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
}

enum ActivityType {
    BOWLING,
    AIRHOCKEY,
    DINING,
}

export default interface OpeningHours {
    id: number
    dayOfWeek: DayOfWeek
    openTime: Date
    closeTime: Date
    activityType: ActivityType
}
