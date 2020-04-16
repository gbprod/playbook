import React from "react";
import { H3 } from "@blueprintjs/core";
import { Schema } from "../containers/types";

interface ChordSchemasProps {
  schemas: Schema[];
}

export const ChordSchemas: React.FC<ChordSchemasProps> = ({ schemas }) => (
  <div>
    <H3>Accords</H3>
    <div>
      {schemas.map((schema, index) => (
        <div key={index}>
          {schema.name} : {schema.frets}
        </div>
      ))}
    </div>
  </div>
);
