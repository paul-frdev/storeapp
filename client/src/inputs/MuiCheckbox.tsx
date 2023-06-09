import React, { FC } from 'react'
import Checkbox from '@mui/material/Checkbox';
import { Box, FormControlLabel } from '@mui/material';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface MuiCheckboxProps {
  id: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  label?: any;
}
export const MuiCheckbox: FC<MuiCheckboxProps> = ({ id, label, disabled, required, register, errors }) => {
  return (
    <Box>
      <FormControlLabel
        label={label}
        control={<Checkbox
          disabled={disabled}
          {...register(id, { required })}
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
        />}
      />
    </Box>
  )
}
