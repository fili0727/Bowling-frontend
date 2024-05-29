import { API_URL } from '../settings'
import Booking from '../interfaces/Booking'
import { handleHttpErrors, makeOptions } from './fetchUtilities'
import BookingLocation from '../interfaces/BookingLocation'
import Product from '../interfaces/Product'
import OpeningHours from '../interfaces/OpeningHours'
import BookingDto from '../interfaces/BookingDto'
import Schedule from '../interfaces/Schedule'
import Employee from '../interfaces/Employee'
import NewShift from '../interfaces/NewShift'
import BookingEditDto from '../interfaces/BookingEditDto'
import Equipment from '../interfaces/Equipment'

export async function getBookingsApi(): Promise<Booking[]> {
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/bookings`, options)

    return await handleHttpErrors(response)
}

export async function getBookingByIdApi(id: number): Promise<Booking> {
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/bookings/${id}`, options)

    return await handleHttpErrors(response)
}

export async function deleteBookingByIdApi(id: number): Promise<void> {
    const options = makeOptions('DELETE', null)
    const response = await fetch(`${API_URL}/bookings/${id}`, options)

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

export async function updateBookingsApi(
    booking: BookingEditDto
): Promise<Booking> {
    const options = makeOptions('PATCH', booking)
    const response = await fetch(`${API_URL}/bookings/${booking.id}`, options)

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

//Schedule

export async function fetchSchedules(): Promise<Schedule[]> {
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/schedules`, options)

    return await handleHttpErrors(response)
}

export async function addShiftApi(shift: NewShift): Promise<Schedule> {
    const options = makeOptions('POST', shift)
    const response = await fetch(`${API_URL}/schedules`, options)

    return await handleHttpErrors(response)
}

export async function deleteShiftApi(id: number): Promise<void> {
    const options = makeOptions('DELETE', null)
    const response = await fetch(`${API_URL}/schedules/${id}`, options)

    return await handleHttpErrors(response)
}

//Employees

export async function fetchEmployees(): Promise<Employee[]> {
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/employees`, options)

    return await handleHttpErrors(response)
}

export async function addEmployeeApi(employee: Employee): Promise<Employee> {
    const options = makeOptions('POST', employee)
    const response = await fetch(`${API_URL}/employees`, options)

    return await handleHttpErrors(response)
}

//Equipment

export async function getEquipmentApi(): Promise<Equipment[]> {
    const options = makeOptions('GET', null)
    const response = await fetch(`${API_URL}/equipment`, options)

    return await handleHttpErrors(response)
}

export async function addEquipmentApi(equipment: Equipment): Promise<Equipment> {
    const options = makeOptions('POST', equipment)
    const response = await fetch(`${API_URL}/equipment`, options)

    return await handleHttpErrors(response)
}

export async function editEquipmentStockApi(updatedEquipmentStock: Equipment):Promise<Equipment>{
    if (!updatedEquipmentStock.id) {
        throw new Error('Equipment must have an id to be updated')
    }

    const options = makeOptions('PATCH', updatedEquipmentStock)
    const response = await fetch(
        `${API_URL}/equipment/${updatedEquipmentStock.id}`,
        options
    )

    return await handleHttpErrors(response)
}

