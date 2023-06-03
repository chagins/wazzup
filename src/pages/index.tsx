import React from 'react';
import { AppLAyout } from 'Layouts/AppLayout';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './MainPage';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLAyout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
};
