import { API_URL } from '../settings'
import Booking from '../interfaces/Booking'
import { handleHttpErrors, makeOptions } from './fetchUtilities'
import BookingLocation from '../interfaces/BookingLocation'
import Product from '../interfaces/Product'

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

export async function getProductsApi(): Promise<Product[]> {
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/products`, options)

    return await handleHttpErrors(response)
}