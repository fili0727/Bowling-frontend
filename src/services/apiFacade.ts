import { API_URL } from '../settings'
import Booking from '../interfaces/Booking'
import { handleHttpErrors, makeOptions } from './fetchUtilities'

export async function getBookingsApi(): Promise<Booking[]> {
    console.log(API_URL)
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/bookings`, options)

    return await handleHttpErrors(response)
}
