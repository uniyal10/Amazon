import React from "react"
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header.component/Header'
import Home from './components/home.component/Home'
function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <Header />
        </Route>
        <Route path="/login">
          <h1>login</h1>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}


ReactDOM.render(<Main />, document.querySelector('#app'))

if (module.hot) {
  module.hot.accept()
}