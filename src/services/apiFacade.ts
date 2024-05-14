import { API_URL } from '../settings'
import Booking from '../interfaces/Booking'
import { handleHttpErrors, makeOptions } from './fetchUtilities'
import BookingLocation from '../interfaces/BookingLocation'
import Product from '../interfaces/Product'
import OpeningHours from '../interfaces/OpeningHours'
import BookingDto from '../interfaces/BookingDto'

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

export async function getAirhockeyBookingsApi(): Promise<Booking[]> {
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/bookings/airhockey`, options)

    return await handleHttpErrors(response)
}

export async function getBookingsByActivityAndDate(
    activityType: string,
    date: string
): Promise<Booking[]> {
    const options = makeOptions('GET', null)
    const response = await fetch(
        `${API_URL}/bookings/activityAndDate?activityType=${activityType}&date=${new Date(
            date
        ).toLocaleDateString('en-CA')}`,
        options
    )

    return await handleHttpErrors(response)
}

export async function postBookingApi(booking: BookingDto): Promise<Booking> {
    const options = makeOptions('POST', booking)
    const response = await fetch(`${API_URL}/bookings`, options)

    return await handleHttpErrors(response)
}

//Products

export async function getProductsApi(): Promise<Product[]> {
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/products`, options)

    return await handleHttpErrors(response)
}

export async function addProductApi(product: Product): Promise<Product> {
    const options = makeOptions('POST', product)
    const response = await fetch(`${API_URL}/products`, options)

    return await handleHttpErrors(response)
}

export async function editProductPriceApi(
    updatedProductPrice: Product
): Promise<Product> {
    if (!updatedProductPrice.id) {
        throw new Error('Product must have an id to be updated')
    }

    const options = makeOptions('PUT', updatedProductPrice)
    const response = await fetch(
        `${API_URL}/products/${updatedProductPrice.id}`,
        options
    )

    return await handleHttpErrors(response)
}

export async function deleteProductApi(id: number) {
    const options = makeOptions('DELETE', null)
    const response = await fetch(`${API_URL}/products/${id}`, options)

    if (response.ok) {
        console.log('Product deleted.')
    }
}
