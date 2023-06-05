import React, { useCallback, KeyboardEvent, useEffect } from 'react';
import { Snackbar, Alert } from '@mui/material';
import { useLazySendMessageQuery } from 'features/api';
import { useAppSelector } from 'hooks';
import { userModel } from 'features/user';
import { getMessagesSettings } from '../slice/messages.slice';
import { StyledBox, StyledInputBase, StyledPaper } from './MessageForm.styled';

export const MessageForm = () => {
  const { chatId } = useAppSelector(getMessagesSettings);
  const { apiTokenInstance, idInstance } = useAppSelector(userModel.selectUser);
  const [sendMessageQuery, { isError }] = useLazySendMessageQuery();
  const [msgValue, setMsgValue] = React.useState<string>();
  const [errMsg, setErrMsg] = React.useState<string>();

  const onSendMsg = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (msgValue && chatId) {
          sendMessageQuery({
            auth: { apiTokenInstance, idInstance },
            msg: { chatId, message: msgValue },
          });
          setMsgValue('');
        }
      }
    },
    [apiTokenInstance, chatId, idInstance, msgValue, sendMessageQuery]
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
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        onClose={onCloseSnack}
      >
        <Alert severity="warning" onClose={onCloseSnack}>
          {errMsg}
        </Alert>
      </Snackbar>
    </StyledBox>
  );
};
