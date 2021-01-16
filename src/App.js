import React from 'react'
import { withRouter, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './containers/Home'
import Create from './containers/Create'

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/create" component={Create} />
      <Route path="/edit/:id" component={Create} />
    </div>
  )
}

export default withRouter(App);






