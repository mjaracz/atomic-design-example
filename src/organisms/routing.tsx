import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={EntitesPage} path="/entites" />
          <Route component={SignIn} path="/sign-in" />
          <Route component={SignUp} path="/sign-up" />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
