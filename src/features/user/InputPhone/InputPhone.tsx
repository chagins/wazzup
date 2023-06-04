import React, { useCallback, useState } from 'react';
import { Box, TextField } from '@mui/material';

export const InputPhone = () => {
  return (
    <TextField
      margin="none"
      required
      id="phoneNumber"
      label="phone number"
      name="phoneNumber"
      placeholder="00000000000"
      autoComplete="tel"
      type="tel"
      autoFocus
      color="success"
      variant="standard"
      // error={isIdInstanceNotValid}
      // helperText={isIdInstanceNotValid && helperText}
    />
  );
};
