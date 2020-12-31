import React from 'react'
import Heading from '../modelHeading'
import About from '../modelAbout'
import Run from '../modelRun'
import Base64Base64 from '../input_output/base64_base64'

import models from '../../constants/models.json'


const InstanceSegmentation = () => {

  const data = models[5]

  return (
    <div>

      <Heading data={data} />

      <Run>
        <Base64Base64 data={data}/>
      </Run>

      <About data={data} />

    </div>
  )
}

export default InstanceSegmentation