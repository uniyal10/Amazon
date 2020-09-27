import React from "react"
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header.component/Header'
function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <h1>checkout</h1>
        </Route>
        <Route path="/login">
          <h1>login</h1>
        </Route>
        <Route path="/">
          <Header />
        </Route>
      </Switch>
    </Router>
  )
}


ReactDOM.render(<Main />, document.querySelector('#app'))

if (module.hot) {
  module.hot.accept()
}