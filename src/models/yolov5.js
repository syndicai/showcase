import React from 'react'
import Heading from '../components/model/heading'
import About from '../components/model/about'
import Run from '../components/model/run'
import StrImage from '../components/input_output/str_json'

import models from './models.json'


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