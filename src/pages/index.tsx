import React from 'react';
import { AppLayout } from 'layouts/AppLayout';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './MainPage';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
};
