import React from 'react'
import Heading from './../../components/model/heading'
import About from './../../components/model/about'
import Run from './../../components/model/run'
import StrJson from './../../components/input_output/str_json'

import data from './data.json'


const FoodClassifier = () => {
  return (
    <div>

      <Heading data={data} />

      <Run>
        <StrJson data={data}/>
      </Run>

      <About data={data} />

    </div>
  )
}

export default FoodClassifier