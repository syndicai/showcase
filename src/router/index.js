import React from "react"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Home from '../components/home'

import AnimalClassifier from '../models/animalClassifier'
import AlexNet from '../models/alexNet'
import YoloV5 from '../models/yolov5'
import BlackAndWhite from "../models/blackAndWhite";


const RootRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/animalclassifier' component={AnimalClassifier}></Route>
        <Route path='/alexnet' component={AlexNet}></Route>
        <Route path='/yolov5' component={YoloV5}></Route>
        <Route path='/blackandwhite' component={BlackAndWhite}></Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default RootRouter
