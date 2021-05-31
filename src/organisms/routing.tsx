import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PageNotFound } from 'molecules/pageNotFound/pageNotFound';
import { SignIn, SignUp } from 'molecules/usersActivity';
import { Home } from 'organisms/home';
import { useStyle } from 'styled';


export const Routing: FC = () => {
  const { root } = useStyle();
  return (
    <BrowserRouter>
      <div className={root}>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={SignIn} path="/sign-in" />
          <Route component={SignUp} path="/sign-up" />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
