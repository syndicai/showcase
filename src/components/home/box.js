import React from "react";
import { Card, Text, Link, GeistProvider, CssBaseline } from '@geist-ui/react'


export default function Box(model) {

  return (
    <GeistProvider>
      <CssBaseline />

      <a href={"/" + model.data.path} >
        <Card shadow width="100%">
          <h3>
            {model.data.name}
          </h3>
          <Text type="secondary">
            {model.data.description}
          </Text>
          <Card.Footer>
            <Link color target="_blank" href={model.data.github}>
              <Text small>Visit source code on GitHub.</Text>
            </Link>
          </Card.Footer>
        </Card>
      </a>

    </GeistProvider>
  );
}
