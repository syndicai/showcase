import React from 'react'
import Heading from '../components/model/heading'
import About from '../components/model/about'
import Run from '../components/model/run'
import ImageImage from '../components/input_output/image_image'

import models from './models.json'


const BlackAndWhite = () => {

  const data = models[3]

  return (
    <div>

      <Heading data={data} />

      <Run>
        {/* <ImageImage data={data}/> */}
      </Run>

      <About data={data} />

    </div>
  )
}

export default BlackAndWhite