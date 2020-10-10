import React from "react";
import { Text, GeistProvider, CssBaseline } from '@geist-ui/react'


export default function Heading(data) {
  return (
    <GeistProvider>
      <CssBaseline />

      <div className="w-full h-64 flex items-center">
        <div className="container max-w-5xl mx-auto px-3 xl:px-0 text-center">
          <Text h2>{data.data.name}</Text> 
        </div>
      </div>

    </GeistProvider>
  );
}
