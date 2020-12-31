import React from 'react'
import Heading from '../modelHeading'
import About from '../modelAbout'
import Run from '../modelRun'
import UrlText from '../input_output/url_text'

import models from '../../constants/models.json'


const ImageClassifier = () => {

  const data = models[0]

  return (
    <div>

      <Heading data={data} />

      <Run><UrlText data={data}/></Run>

      <About data={data} />

    </div>
  )
}

export default ImageClassifier
