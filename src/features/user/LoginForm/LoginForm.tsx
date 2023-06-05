import React, { FormEvent, useCallback, useState } from 'react';
import { Alert, Box, Collapse, Link, TextField } from '@mui/material';
import { useAppDispatch } from 'hooks';
import { useLazyGetAccountStateQuery } from 'features/api';
import LoginIcon from '@mui/icons-material/Login';
import { setUser } from '../slice/user.slice';
import { StyledBox, StyledBoxSubmit, StyledSubmit } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [getAccountState, { isError: isAccountError, isFetching: isAccountFetching }] =
    useLazyGetAccountStateQuery();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const onSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const formData = new FormData(event.currentTarget);

      const idInstance = formData.get('IdInstance')?.toString() || '';
      const isIdInstanceValid = !!idInstance.length;

      const apiTokenInstance = formData.get('ApiTokenInstance')?.toString() || '';
      const isApiTokenInstanceValid = !!apiTokenInstance.length;

      if (isIdInstanceValid && isApiTokenInstanceValid) {
        getAccountState({ apiTokenInstance, idInstance })
          .then((result) => {
            if (result.data?.stateInstance === 'authorized') {
              setErrorMsg(null);
              dispatch(setUser({ idInstance, apiTokenInstance }));
              return;
            }
            throw new Error();
          })
          .catch(() => {
            setErrorMsg('User is not authorized');
          });
      }
    },
    [dispatch, getAccountState]
  );

  return (
    <StyledBox>
      <Collapse in={isAccountError}>
        <Alert severity="error">{errorMsg}</Alert>
      </Collapse>
      <Box component="form" onSubmit={onSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="IdInstance"
          label="IdInstance"
          name="IdInstance"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="ApiTokenInstance"
          label="ApiTokenInstance"
          id="ApiTokenInstance"
        />
        <StyledBoxSubmit>
          <StyledSubmit
            type="submit"
            fullWidth
            variant="contained"
            loading={isAccountFetching}
            loadingPosition="start"
            startIcon={<LoginIcon />}
          >
            Submit
          </StyledSubmit>
          <Link
            href="https://green-api.com/docs/before-start/#parameters"
            fontSize="32px"
            underline="none"
            title="help"
          >
            ℹ️
          </Link>
        </StyledBoxSubmit>
      </Box>
    </StyledBox>
  );
};
