import React, { useCallback } from 'react';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { useAppDispatch } from 'store';
import { setUser } from 'features/user/user.slice';

export const Login = () => {
  const dispatch = useAppDispatch();

  const onLogin = useCallback(() => {
    dispatch(setUser({ apiTokenInstance: null, idInstance: null }));
  }, [dispatch]);

  return (
    <Button color="inherit" startIcon={<LoginIcon />} onClick={onLogin}>
      Login
    </Button>
  );
};
