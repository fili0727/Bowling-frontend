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

export async function editProductPriceApi(updatedProductPrice: Product): Promise<Product> {
      if (!updatedProductPrice.id) {
    throw new Error("Product must have an id to be updated");
  }

    const options = makeOptions('PUT', updatedProductPrice)
    const response = await fetch(`${API_URL}/products/${updatedProductPrice.id}`, options)

    return await handleHttpErrors(response)
}

export async function deleteProductApi(id: number) {
    const options = makeOptions('DELETE', null)
    const response = await fetch(`${API_URL}/products/${id}`, options)

    if (response.ok) {
        console.log("Product deleted.");
    }
}