import React, { FormEvent, useState } from 'react';
import { Alert, Box, Collapse, Link, TextField } from '@mui/material';
import { useAppDispatch } from 'store';
import { useLazyGetAccountStateQuery } from 'features/api';
import { setUser } from '../user.slice';
import { StyledBox, StyledBoxSubmit, StyledSubmit } from './LoginForm.styled';

const helperText = 'The value cannot be empty';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [getAccountState, { isError: isAccountError, isFetching: isAccountFetching }] =
    useLazyGetAccountStateQuery();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isIdInstanceNotValid, setIsIdInstanceNotValid] = useState(false);
  const [isApiTokenInstanceNotValid, setIsApiTokenInstanceNotValid] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const idInstance = formData.get('IdInstance')?.toString() || '';
    const isIdInstanceValid = !!idInstance.length;
    setIsIdInstanceNotValid(!isIdInstanceValid);

    const apiTokenInstance = formData.get('ApiTokenInstance')?.toString() || '';
    const isApiTokenInstanceValid = !!apiTokenInstance.length;
    setIsApiTokenInstanceNotValid(!isApiTokenInstanceValid);

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
  };

  return (
    <StyledBox>
      <Collapse in={isAccountError}>
        <Alert severity="error">{errorMsg}</Alert>
      </Collapse>
      <Box component="form" onSubmit={onSubmit} noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          id="IdInstance"
          label="IdInstance"
          name="IdInstance"
          autoFocus
          error={isIdInstanceNotValid}
          helperText={isIdInstanceNotValid && helperText}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="ApiTokenInstance"
          label="ApiTokenInstance"
          id="ApiTokenInstance"
          error={isApiTokenInstanceNotValid}
          helperText={isApiTokenInstanceNotValid && helperText}
        />
        <StyledBoxSubmit>
          <StyledSubmit type="submit" fullWidth variant="contained" disabled={isAccountFetching}>
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
