import React from "react"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Home from '../components/views/home'

import ImageClassifier from '../components/views/imageClassifier'
import ObjectDetection from '../components/views/objectDetector'
import Colorizer from '../components/views/colorizer'
import FaceBlurring from "../components/views/faceblurring";
import StyleTransfer from "../components/views/styleTransfer";
import InstanceSegmentation from "../components/views/instanceSegmentation";
import MaskDetector from "../components/views/maskDetector";


const RootRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/image-classifier' component={ImageClassifier}></Route>
        <Route path='/object-detector' component={ObjectDetection}></Route>
        <Route path='/colorizer' component={Colorizer}></Route>
        <Route path='/face-blurring' component={FaceBlurring}></Route>
        <Route path='/style-transfer' component={StyleTransfer}></Route>
        <Route path='/instance-segmentation' component={InstanceSegmentation}></Route>
        <Route path='/mask-detector' component={MaskDetector}></Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default RootRouter
