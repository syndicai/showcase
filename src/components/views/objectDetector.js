import React from 'react'
import Heading from '../modelHeading'
import About from '../modelAbout'
import Run from '../modelRun'
import UrlBase64 from '../input_output/url_base64'

import models from '../../constants/models.json'


const ObjectDetection = () => {

  const data = models[1]

  return (
    <div>

      <Heading data={data} />

      <Run>
        <UrlBase64 data={data}/>
      </Run>

      <About data={data} />

    </div>
  )
}

export default ObjectDetection