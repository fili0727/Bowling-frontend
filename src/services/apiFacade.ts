import { API_URL } from '../settings'
import Booking from '../interfaces/Booking'
import { handleHttpErrors, makeOptions } from './fetchUtilities'
import BookingLocation from '../interfaces/BookingLocation'
import OpeningHours from '../interfaces/OpeningHours'

export async function getBookingsApi(): Promise<Booking[]> {
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/bookings`, options)

    return await handleHttpErrors(response)
}

export async function getBookingLocationsApi(): Promise<BookingLocation[]> {
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/bookingLocations`, options)

    return await handleHttpErrors(response)
}

export async function getTablesApi(): Promise<BookingLocation[]> {
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/bookingLocations/tables`, options)

    return await handleHttpErrors(response)
}

export async function getAirhockeyApi(): Promise<BookingLocation[]> {
    const options = makeOptions('GET', null)
    const response = await fetch(
        `${API_URL}/bookingLocations/airhockey`,
        options
    )

    return await handleHttpErrors(response)
}

export async function getLanesApi(): Promise<BookingLocation[]> {
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/bookingLocations/lanes`, options)

    return await handleHttpErrors(response)
}

export async function getAirhockeyHoursApi(): Promise<OpeningHours[]> {
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/openingHours/airhockey`, options)

    return await handleHttpErrors(response)
}
