import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { getBookingsApi } from '../../services/apiFacade'; // Assuming you have this function
import Booking from '../../interfaces/Booking';
import '../../styling/schedule.css'; // Assuming you have this CSS file


export default function BookingsCalendar() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const getBookings = async () => {
      try {
        const bookings = await getBookingsApi();
        setBookings(bookings);
      } catch (error) {
        console.error('Failed to fetch bookings:', error);
      }
    };

    getBookings();
  }, []);

   const events = bookings.map((booking) => {
    const start = new Date(booking.bookingTime);
    const end = new Date(start.getTime() + 2 * 60 * 60 * 1000); // 2 hours later

    return {
      id: booking.id.toString(),
      title: `${booking.name} (${booking.bookingLocation.activityType})`, // Adjust this as needed
      start: start,
      end: end,
    };
  });

return (
    <div className="schedule-container">
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        events={events}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridDay,timeGridWeek',
        }}
        slotMinTime="08:00:00" // Adjust to your opening hours
        slotMaxTime="23:59:00" // Adjust to your closing hours
        businessHours={{
          daysOfWeek: [0, 1, 2, 3, 4, 5, 6], // Monday - Friday
          startTime: '10:00', // Start time for the business hours
          endTime: '22:00',   // End time for the business hours
        }}
        allDaySlot={false}
        height="auto" // Adjust height to auto

        eventTimeFormat={{
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          meridiem: false
        }}
      />
    </div>
  );
}