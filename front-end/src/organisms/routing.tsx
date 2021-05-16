import React, { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useStyle } from 'styled'
import { PageNotFound } from 'molecules/pageNotFound'
import { RememberPass } from 'molecules/passwordAuthentication/rememberPass'
import { SignIn } from 'molecules/usersActivity/signIn'
import { SignUp } from 'molecules/usersActivity/signUp'
import { Home } from 'organisms/home'
import { Unauthorized } from 'molecules/passwordAuthentication/unauthorized'
import { Profile } from './profile'
import { ChangePass } from 'molecules/passwordAuthentication/changePass'
import { RememberPassInfo } from 'molecules/passwordAuthentication/rememberPass/rememberPassInfo'
import { ProductsList } from './products'
import { UserInfo } from 'molecules/usersActivity/userInfo'
import { AddProduct } from 'molecules/addProduct'

export const Routing: FC = () => {
  const { root } = useStyle()
  return (
    <BrowserRouter>
      <div className={root}>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/user-info" component={UserInfo} />
          <Route path="/remember-pass" component={RememberPass} />
          <Route path="/remember-info" component={RememberPassInfo} />
          <Route path="/change-pass/:token" component={ChangePass} />
          <Route path="/unauthorized" component={Unauthorized} />
          <Route path="/profile" component={Profile} />
          <Route path="/products" component={ProductsList} />
          <Route path="/add-product" component={AddProduct}/>
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
