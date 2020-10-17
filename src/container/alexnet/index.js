import React from 'react'
import Heading from './../../components/model/heading'
import About from './../../components/model/about'
import Run from './../../components/model/run'
import UrlJson from './../../components/input_output/url_json'

import data from './data.json'


const YoloV5 = () => {
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

export default YoloV5
