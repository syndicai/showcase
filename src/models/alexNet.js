import React from 'react'
import Heading from '../components/model/heading'
import About from '../components/model/about'
import Run from '../components/model/run'
import StrImage from "../components/input_output/str_image";

import models from './models.json'


const AlexNet = () => {

  const data = models[0]

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

export default AlexNet
