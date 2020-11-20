import React from 'react'
import Heading from '../components/model/heading'
import About from '../components/model/about'
import Run from '../components/model/run'
import UrlJson from '../components/input_output/url_json'

import models from './models.json'


const AlexNet = () => {

  const data = models[0]

  return (
    <div>

      <Heading data={data} />

      <Run>
        <UrlJson data={data}/>
      </Run>

      <About data={data} />

    </div>
  )
}

export default AlexNet
