import { useState } from 'react';
import { TextField, MenuItem, FormHelperText, DialogActions, Button } from '@mui/material';
import Employee from '../../interfaces/Employee';
import { addEmployeeApi } from '../../services/apiFacade';



interface AddEmployeeDialogProps {
  onClose: () => void;
}

const roles = ['Owner', 'Manager', 'Cleaning Staff', 'Cashier', 'Operator'];

export default function AddEmployeeDialog({ onClose }: AddEmployeeDialogProps) {
  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async () => {
    if (!name || !role) {
      setError('Name and role are required.');
      return;
    }

    const newEmployee: Employee = { name, role };

    try {
      await addEmployeeApi(newEmployee);
      onClose();
    } catch (error) {
      console.error('Failed to add employee:', error);
      setError('Failed to add employee.');
    }
  };

  return (
    <div>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setError('');
        }}
        fullWidth
        margin="normal"
      />
      <TextField
        select
        label="Role"
        value={role}
        onChange={(e) => {
          setRole(e.target.value);
          setError('');
        }}
        fullWidth
        margin="normal"
      >
        {roles.map((roleOption) => (
          <MenuItem key={roleOption} value={roleOption}>
            {roleOption}
          </MenuItem>
        ))}
      </TextField>
      {error && (
        <FormHelperText error>{error}</FormHelperText>
      )}
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Add
        </Button>
      </DialogActions>
    </div>
  );
}
