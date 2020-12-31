import React from 'react'
import Heading from '../modelHeading'
import About from '../modelAbout'
import Run from '../modelRun'
import ImageUrlBase64 from '../input_output/imageUrl_base64'

import models from '../../constants/models.json'


const MaskDetector = () => {

  const data = models[6]

  return (
    <div>

      <Heading data={data} />

      <Run>
        <ImageUrlBase64 data={data}/>
      </Run>

      <About data={data} />

    </div>
  )
}

export default MaskDetector