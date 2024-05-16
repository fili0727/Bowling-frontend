import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { fetchSchedules, deleteShiftApi } from '../../services/apiFacade';
import Schedule from '../../interfaces/Schedule';
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import AddShiftDialog from './AddShiftDialog';
import AddEmployeeDialog from './AddEmployeeDialog';
import '../../styling/schedule.css';

interface EventClickArg {
  event: {
    id: string;
    title: string;
  };
}


export default function ScheduleCalendar() {
   const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [shiftOpen, setShiftOpen] = useState(false);
  const [employeeOpen, setEmployeeOpen] = useState(false);

  useEffect(() => {
    const getSchedules = async () => {
      try {
        const schedules = await fetchSchedules();
        setSchedules(schedules);
      } catch (error) {
        console.error('Failed to fetch schedules:', error);
      }
    };

    getSchedules();
  }, []);

  const handleShiftOpen = () => {
    setShiftOpen(true);
  };

  const handleShiftClose = () => {
    setShiftOpen(false);
  };

  const handleEmployeeOpen = () => {
    setEmployeeOpen(true);
  };

  const handleEmployeeClose = () => {
    setEmployeeOpen(false);
  };

  const handleEventClick = async (clickInfo: EventClickArg) => {
    const confirmed = window.confirm(`Are you sure you want to delete the shift for ${clickInfo.event.title}?`);
    if (confirmed) {
      try {
        await deleteShiftApi(Number(clickInfo.event.id));
        const updatedSchedules = await fetchSchedules();
        setSchedules(updatedSchedules);
      } catch (error) {
        console.error('Failed to delete shift:', error);
      }
    }
  };

  const events = schedules.map((schedule) => ({
    //@ts-expect-error id could be null
    id: schedule.id.toString(),
    title: `${schedule.employee.name} (${schedule.employee.role})`,
    start: schedule.startTime,
    end: schedule.endTime,
  }));

  return (
      <div className="schedule-container">
      <div className="buttons-container">
        <Button variant="contained" color="primary" onClick={handleShiftOpen}>
          Add Shift
        </Button>
        <Button variant="contained" color="secondary" onClick={handleEmployeeOpen} style={{ marginLeft: '10px' }}>
          Add Employee
        </Button>
      </div>
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        events={events}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridDay,timeGridWeek,dayGridMonth',
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
        eventClick={handleEventClick} // Add the event click handler
      />
      <Dialog open={shiftOpen} onClose={handleShiftClose}>
        <DialogTitle>Add Shift</DialogTitle>
        <DialogContent>
          <AddShiftDialog onClose={handleShiftClose} onShiftAdded={setSchedules} />
        </DialogContent>
      </Dialog>
      <Dialog open={employeeOpen} onClose={handleEmployeeClose}>
        <DialogTitle>Add Employee</DialogTitle>
        <DialogContent>
          <AddEmployeeDialog onClose={handleEmployeeClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
