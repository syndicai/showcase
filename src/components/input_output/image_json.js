import React from "react";
import { Code, Button, Input, Image, GeistProvider, CssBaseline } from '@geist-ui/react'
import { RefreshCcw } from '@geist-ui/react-icons'


export default function InputJson(data) {

  return (
    <GeistProvider>
      <CssBaseline />

      {/* INPUT: Image */}
      <div className="w-full background-dots flex justify-center items-center" style={{height:"440px"}}>
        <Image height="440" src={data.data.sample_input} />
      </div>

      {/* OUTPUT: Json */}
      {/* <div className="w-full background-dots flex justify-center items-center" >
        <Code width="100%" className="bg-white" block>{data.data.sample_output}</Code>
      </div> */}

      {/* RUN Model */}
      <div className="my-5">
        <Input placeholder={data.data.sample_input} width="100%" />
        <div className="flex justify-center">
          <Button className="m-2" type="success">Run model</Button>
          <Button className="my-2" iconRight={<RefreshCcw />} auto />
        </div>
      </div>

    </GeistProvider>
  );
}
