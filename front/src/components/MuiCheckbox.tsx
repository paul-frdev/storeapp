import React, { FC } from 'react'
import Checkbox from '@mui/material/Checkbox';
import { Box, FormControlLabel } from '@mui/material';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface MuiCheckboxPorps {
  id: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  label?: any;
}
export const MuiCheckbox: FC<MuiCheckboxPorps> = ({ id, label, disabled, required, register, errors }) => {
  return (
    <Box>
      <FormControlLabel
        value="top"
        label={label}
        control={<Checkbox
          {...label}
          disabled={disabled}
          {...register(id, { required })}
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
        />}
      />
    </Box>
  )
}
