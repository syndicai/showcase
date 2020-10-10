import React from "react";
import { Spacer, Text, GeistProvider, CssBaseline } from '@geist-ui/react'


export default function InputImage(props) {

  return (
    <GeistProvider>
      <CssBaseline />

      <div className="w-full flex border-t border-b" style={{backgroundColor: "#fafafa"}}>
        <div className="container max-w-5xl py-10 mx-auto px-3 xl:px-0">
          
          <Text h3>Run a model</Text>
          <Text type="secondary">Provide input data in order to run a model.</Text>
          
          <div className="w-full h-full">
            {props.children}
          </div>
        
        </div>
      </div>
      <Spacer y={3}/>

      
      <style jsx>{`
        .background-dots {
            background-position: 0 0, 25px 25px;
            background-image: radial-gradient(#d7d7d7 1px,transparent 0),radial-gradient(#d7d7d7 1px,transparent 0);
            background-size: 50px 50px;
      }
      `}</style>

    </GeistProvider>
  );
}
