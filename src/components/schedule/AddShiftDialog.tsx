import  { useEffect, useState } from 'react';
import { DialogActions, TextField, Button, MenuItem } from '@mui/material';
import Employee from '../../interfaces/Employee';
import Schedule from '../../interfaces/Schedule';
import { addShiftApi, fetchSchedules, fetchEmployees } from '../../services/apiFacade';


interface AddShiftDialogProps {
  onClose: () => void;
  onShiftAdded: (schedules: Schedule[]) => void;
}

export default function AddShiftDialog({ onClose, onShiftAdded }: AddShiftDialogProps) {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const employees = await fetchEmployees();
        setEmployees(employees);
      } catch (error) {
        console.error('Failed to fetch employees:', error);
      }
    };

    getEmployees();
  }, []);

  const handleSubmit = async () => {
    if (!selectedEmployee) {
      setError('Please select an employee.');
      return;
    }

    const newShift = {
      employee: selectedEmployee,
      startTime,
      endTime,
    };

    try {
      //@ts-expect-error id is possibly null
      await addShiftApi(newShift);
      const updatedSchedules = await fetchSchedules();
      onShiftAdded(updatedSchedules);
      onClose();
    } catch (error) {
      console.error('Failed to add shift:', error);
    }
  };

  

  return (
    <div>
      <TextField
        select
        label="Employee"
        value={selectedEmployee ? selectedEmployee.id : ''}
        onChange={(e) => {
          const employee = employees.find(emp => emp.id === parseInt(e.target.value));
          setSelectedEmployee(employee || null);
          setError('');
        }}
        fullWidth
        margin="normal"
      >
        {employees.map((employee) => (
          <MenuItem key={employee.id} value={employee.id}>
            {employee.name} ({employee.role})
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Start Time"
        type="datetime-local"
        value={startTime}
        onChange={(e) => {
          setStartTime(e.target.value);
          setEndTime(''); 
          setError('');
        }}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="End Time"
        type="datetime-local"
        value={endTime}
        onChange={(e) => {
          setEndTime(e.target.value);
          setError('');
        }}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          min: startTime, 
        }}
      />
      {error && (
      <p>Tis</p>
      )}
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary" disabled={!selectedEmployee || !startTime || !endTime}>
          Add
        </Button>
      </DialogActions>
    </div>
  );
}