import React, { FormEvent, useCallback } from 'react';
import { TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { useAppDispatch } from 'hooks';
import { makeChatId } from 'helpers';
import { PHONE_NUMBER_LENGTH } from 'const';
import { setMessagesSettings } from '../slice/messages.slice';
import { StyledBox, StyledIconButton } from './InputPhoneNumber.styled';

export const InputPhoneNumber = () => {
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget as HTMLFormElement);

      const phoneNumber = formData.get('phoneNumber')?.toString() || '';
      const isPhoneNumberValid = phoneNumber.length === PHONE_NUMBER_LENGTH;

      if (isPhoneNumberValid) {
        dispatch(setMessagesSettings({ chatId: makeChatId(phoneNumber) }));
      }
    },
    [dispatch]
  );

  return (
    <StyledBox component="form" onSubmit={onSubmit}>
      <TextField
        required
        id="phoneNumber"
        name="phoneNumber"
        label="phone number"
        placeholder="00000000000"
        autoComplete="tel"
        type="tel"
        autoFocus
        color="success"
        variant="standard"
      />
      <StyledIconButton type="submit">
        <SaveIcon />
      </StyledIconButton>
    </StyledBox>
  );
};
