enum DayOfWeek {
    MONDAY = 'MONDAY',
    TUESDAY = 'TUESDAY',
    WEDNESDAY = 'WEDNESDAY',
    THURSDAY = 'THURSDAY',
    FRIDAY = 'FRIDAY',
    SATURDAY = 'SATURDAY',
    SUNDAY = 'SUNDAY',
}

enum ActivityType {
    BOWLING,
    AIRHOCKEY,
    DINING,
}

export default interface OpeningHours {
    id: number
    dayOfWeek: DayOfWeek
    openingTime: string
    closingTime: string
    activityType: ActivityType
}
