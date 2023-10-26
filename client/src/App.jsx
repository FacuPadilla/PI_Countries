import {Route, BrowserRouter} from "react-router-dom"
import { useState } from 'react'
import Home from './views/Home/Home'
import Form from "./views/Form/Form"
import Detail from "./views/Detail/Detail"
import LandingPage from "./views/LandingPage/LandingPage"

import './App.css'

function App() {
  

  return (
    <BrowserRouter>
    <div>
      <Route  path="/home" component={Home}/>
      <Route  path="/form" component={Form}/>
      <Route  path="/detail/:id" component={Detail}/>
      <Route  exact path="/" component={LandingPage}/>
    </div>
    </BrowserRouter>
  )
}

export default App
