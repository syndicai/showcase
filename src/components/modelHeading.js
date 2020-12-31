import React from "react";
import { Text, Link, GeistProvider, CssBaseline } from '@geist-ui/react'


export default function Heading(data) {
  return (
    <GeistProvider>
      <CssBaseline />

      <div className="w-full h-64 flex items-center">
        <div className="container max-w-5xl mx-auto xl:px-0 text-center">
          <Text h2>{data.data.name}</Text> 
          <Link color target="_blank" href={data.data.github}>
            <Text small>Visit source code</Text>
          </Link>
        </div>
      </div>

    </GeistProvider>
  );
}
