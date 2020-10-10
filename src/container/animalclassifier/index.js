import React from 'react'
import Heading from './../../components/model/heading'
import About from './../../components/model/about'
import Run from './../../components/model/run'
import ImageJson from './../../components/input_output/image_json'

import data from './data.json'


const AnimalClassifier = () => {
  return (
    <div>

      <Heading data={data} />

      <Run>
        <ImageJson data={data}/>
      </Run>

      <About data={data} />

    </div>
  )
}

export default AnimalClassifier