import React from "react"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as RouterConfig from '../constants/RouterConfig'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Home from '../container/home'

import AnimalClassifier from '../container/animalclassifier'
import YoloV5 from '../container/yolov5'



const RootRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={RouterConfig.HOME} component={Home}></Route>
        <Route exact path={RouterConfig.ANIMALCLASSIFIER} component={AnimalClassifier}></Route>
        <Route exact path={RouterConfig.YOLOV5} component={YoloV5}></Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default RootRouter
