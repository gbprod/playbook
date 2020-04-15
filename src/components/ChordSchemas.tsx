import React from "react";
import { H5 } from "@blueprintjs/core";
import { Schema } from "../containers/types";

interface ChordSchemasProps {
  schemas: Schema[];
}

export const ChordSchemas: React.FC<ChordSchemasProps> = ({ schemas }) => (
  <>
    <H5>Accords</H5>
    <div>
      {schemas.map((schema, index) => (
        <div key={index}>
          {schema.name} : {schema.frets}
        </div>
      ))}
    </div>
  </>
);
