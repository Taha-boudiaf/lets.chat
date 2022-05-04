import React from 'react';
import { useField } from 'formik';
import { TextField } from '@mui/material';

const DateTimePicker = ({
  name,
  ...otherProps
}) => {
  const [field, meta] = useField(name);

  const configDateTimePicker = {
    ...field,
    ...otherProps,
    type: 'date',
    variant: 'outlined',
    fullWidth: true,
    InputLabelProps: {
      shrink: true
    }
  };

  if(meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }

  return (
    <TextField
      {...configDateTimePicker}
    />
  );
};
export default DateTimePicker