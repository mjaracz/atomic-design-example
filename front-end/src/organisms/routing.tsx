import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AddProduct } from 'molecules/addProduct';
import { PageNotFound } from 'molecules/pageNotFound';
import {
  ChangePass,
  RememberPass,
  RememberPassInfo,
  Unauthorized,
} from 'molecules/passwordAuthentication';
import { SignIn, SignUp, UserInfo } from 'molecules/usersActivity';
import { Home } from 'organisms/home';
import { useStyle } from 'styled';

import { ProductsList } from './products/products';
import { Profile } from './profile';

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
          <Route component={RememberPass} path="/remember-pass" />
          <Route component={RememberPassInfo} path="/remember-info" />
          <Route component={ChangePass} path="/change-pass/:token" />
          <Route component={Unauthorized} path="/unauthorized" />
          <Route component={Profile} path="/profile" />
          <Route component={ProductsList} path="/products" />
          <Route component={AddProduct} path="/add-product" />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
