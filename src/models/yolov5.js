import React from 'react'
import Heading from '../components/model/heading'
import About from '../components/model/about'
import Run from '../components/model/run'

import models from './models.json'
import StrImage from "../components/input_output/str_image";


const YoloV5 = () => {

  const data = models[2]

  return (
    <div>

      <Heading data={data} />

      <Run>
        <StrImage data={data}/>
      </Run>

      <About data={data} />

    </div>
  )
}

export default YoloV5