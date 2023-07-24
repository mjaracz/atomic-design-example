import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useStyle } from 'useStyles';
import { PageNotFound } from './pageNotFound';
import { SignIn } from './signIn';
import { SignUp } from './signUp';
import { Home } from './home';
import { EntitesPage } from './entitesPage/entitesPage';

export const Routing: FC = () => {
  const { root } = useStyle();
  return (
    <BrowserRouter>
      <div className={root}>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<EntitesPage />} path="/entites" />
          <Route element={<SignIn/>} path="/sign-in" />
          <Route element={<SignUp/>} path="/sign-up" />
          <Route element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
