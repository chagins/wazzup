import React, { useCallback, KeyboardEvent, useEffect } from 'react';
import { TextField, Snackbar, Alert } from '@mui/material';
import { useLazySendMessageQuery } from 'features/api';
import { useAppSelector } from 'store';
import { makeChatId } from 'helpers';
import { StyledBox, StyledInputBase, StyledPaper } from './MessageForm.styled';
import { selectUser } from '../messages.slice';

export const MessageForm = () => {
  const { apiTokenInstance, idInstance } = useAppSelector(selectUser);
  const [sendMessageQuery, { isError, isSuccess }] = useLazySendMessageQuery();
  const [phoneNumberValue, setPhoneNumberValue] = React.useState<string>();
  const [msgValue, setMsgValue] = React.useState<string>();
  const [errMsg, setErrMsg] = React.useState<string>();

  const onSendMsg = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (phoneNumberValue && msgValue) {
          sendMessageQuery({
            auth: { apiTokenInstance, idInstance },
            msg: { chatId: makeChatId(phoneNumberValue), message: msgValue },
          });
          setMsgValue('');
        } else {
          setErrMsg('please enter a phone number & message');
        }
      }
    },
    [apiTokenInstance, idInstance, msgValue, phoneNumberValue, sendMessageQuery]
  );

  useEffect(() => {
    if (isError) {
      setErrMsg('error sending message');
    }
  }, [isError]);

  const onCloseSnack = () => {
    setErrMsg('');
  };

  return (
    <StyledBox>
      <TextField
        margin="none"
        required
        label="phone number"
        placeholder="00000000000"
        autoComplete="tel"
        type="tel"
        autoFocus
        color="success"
        variant="standard"
        value={phoneNumberValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPhoneNumberValue(event.target.value);
        }}
      />
      <StyledPaper elevation={0}>
        <StyledInputBase
          required
          placeholder="Введите сообщение"
          multiline
          onKeyDown={onSendMsg}
          value={msgValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setMsgValue(event.target.value);
          }}
        />
      </StyledPaper>
      <Snackbar
        open={!!errMsg}
        autoHideDuration={10000}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        onClose={onCloseSnack}
      >
        <Alert severity="warning" onClose={onCloseSnack}>
          {errMsg}
        </Alert>
      </Snackbar>
    </StyledBox>
  );
};
