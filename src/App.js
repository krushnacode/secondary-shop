import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import ProductPage from "./component/ProductListing";

import Headers from './component/Header'
import ProductDetails from './component/ProductDetail'

function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
        <Switch>
          <Route path="/" exact component={ProductPage} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>

      </Router>
    </div>
  )
}

export default App