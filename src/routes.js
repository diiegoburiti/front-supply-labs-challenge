import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import UserProfile from './pages/UserProfile/UserProfile'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user/:id" component={UserProfile} />
      </Switch>
    </BrowserRouter>
  )
}
