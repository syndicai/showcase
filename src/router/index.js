import React from "react"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as RouterConfig from '../constants/RouterConfig'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Home from '../container/home'

import AnimalClassifier from '../container/animalclassifier'
import AlexNet from '../container/alexnet'
import FoodClassifier from '../container/foodclassifier'


const RootRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={RouterConfig.HOME} component={Home}></Route>
        <Route path={RouterConfig.ANIMALCLASSIFIER} component={AnimalClassifier}></Route>
        <Route path={RouterConfig.ALEXNET} component={AlexNet}></Route>
        <Route path={RouterConfig.FOODCLASSIFIER} component={FoodClassifier}></Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default RootRouter
