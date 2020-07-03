import React, { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useStyle } from './styled'
import { PageNotFound } from '../pageNotFound'
import { RememberPass } from '../rememberPass'
import { SignIn } from '../signIn'
import { SignUp } from '../signUp'
import { Home } from '../home'
import { Unauthorized } from '../unauthorized'
import { Profile } from '../profile'
import { ChangePass } from '../changePass'
import { RememberPassInfo } from '../rememberPass/infoPage'
import { ProductsList } from '../products'
import { UserInfo } from '../userInfo'
import { AddProduct } from '../products/addProduct'

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
