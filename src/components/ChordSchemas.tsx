import React from "react";
import { Schema } from "../containers/types";
import "./ChordSchemas.scss";
import { Code } from "@blueprintjs/core";

interface ChordSchemasProps {
  schemas: Schema[];
}

export const ChordSchemas: React.FC<ChordSchemasProps> = ({ schemas }) => (
  <div className="ChordSchemas">
    {schemas.map((schema, index) => (
      <Code className="ChordSchemas__chord" key={index}>
        {schema.name}: {schema.frets}
      </Code>
    ))}
  </div>
);
