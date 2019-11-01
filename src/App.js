import React, { Component } from 'react'
import Header from './common/header/index'
import store from './store/index'
import {Provider} from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'
import Signup from './pages/signup';

export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <BrowserRouter>
          <Header />        
          <Route path = '/' exact component = {Home}></Route>
          {/* 还可以写成这样 不过一般都是用component解决 <Route path = '/detail' exact render = {() => (<Detail />)}></Route> */}
          <Route path = '/detailpage/:id' exact component = {Detail}></Route>
          <Route path = '/login' exact component = {Login}></Route>
          <Route path = '/write' exact component = {Write}></Route>
          <Route path = '/signup' exact component = {Signup}></Route>
        </BrowserRouter>
      </Provider>
    )
  }
}
