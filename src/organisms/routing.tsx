import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AddProduct } from 'molecules/addProduct';
import { PageNotFound } from 'molecules/pageNotFound';
import { SignIn, SignUp, UserInfo } from 'molecules/usersActivity';
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
          <Route component={UserInfo} path="/user-info" />
          <Route component={AddProduct} path="/add-product" />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
