import React from "react";
import { Spacer, Text, Divider, GeistProvider, CssBaseline } from '@geist-ui/react'


export default function About(data) {
  return (
    <GeistProvider>
      <CssBaseline />

      <div className="w-full flex" >
        <div className="container max-w-5xl pt-10 mx-auto py-20 px-3 xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-20">
            
            <div className="col-span-1 sm:col-span-3 lg:col-span-2">
              <Text h3>Details</Text>
              <Divider/>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <Text p b>Category:</Text>
                  <Text p b>Input type:</Text>
                  <Text p b>Output type:</Text>
                  <Text p b>Framework:</Text>
                </div>
                <div className="w-full text-right">
                  <Text p type="secondary">{data.data.category}</Text>
                  <Text p type="secondary">{data.data.input_type}</Text>
                  <Text p type="secondary">{data.data.output_type}</Text>
                  <Text p type="secondary"><a href={data.data.framework_path}>{data.data.framework}</a></Text>
                </div>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-3 lg:col-span-4">
              <Text h3>Description</Text>
              <Divider />
              <div className="grid grid-cols-1 gap-2">
                <Text p type="secondary">{data.data.description}</Text>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Spacer y={7}/>

    </GeistProvider>
  );
}
