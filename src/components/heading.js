import React from "react";
import { Text, GeistProvider, CssBaseline } from '@geist-ui/react'

import link from './../constants/syndicai.json'


export default function Title() {
  return (
    <GeistProvider>
      <CssBaseline />

      <div className="w-full text-center mb-20 sm:mb-32">
        <h2 className="mx-auto text-2xl md:text-3xl font-bold gradient-text tracking-tighter" style={{width: "min-content"}}>Showcase</h2>
        <h1 className="px-5 sm:px-auto mb-5 md:text-6xl tracking-tighter" >Let us inspire you</h1> 
        <Text type="secondary" className="px-5 sm:px-auto max-w-screen-md mx-auto">
          We do know that deploying machine learning models at scale is a very time-consuming
          and complex process. Therefore we decided to build a platform that will allow 
          you easily showcase your models. 
        </Text>
        <Text small p><a href={link.showcase_github}>Visit source code on GitHub.</a></Text>
      </div>

      <style jsx>{`
        .gradient-text {
          background-color: #7c32b8;
          background-image: linear-gradient(45deg, #7c32b8, #fc0783);
          background-size: 100%;
          -webkit-background-clip: text;
          -moz-background-clip: text;
          -webkit-text-fill-color: transparent; 
          -moz-text-fill-color: transparent;
      }
      `}</style>

    </GeistProvider>
  );
}
