import React from 'react'
import { GeistProvider, CssBaseline } from '@geist-ui/react';

import Heading from '../heading';
import Box from '../box';

import models from './../../constants/models.json'


const Home = () => {

  return (

    <GeistProvider>
      <CssBaseline />

      <div className="w-full min-h-screen flex" style={{backgroundColor: "#fafafa"}}>
        <div className="container max-w-5xl pt-20 mx-auto pt-32 py-48 px-3 xl:px-0">

          <Heading />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {models.map(model => <div className="col-span-1"><Box data={model}/></div>)}
          </div>

        </div>
      </div>

    </GeistProvider>

  )
}

export default Home
