import React from "react";
import { Callout } from "@blueprintjs/core";

interface NotesProps {
  text: string[];
}

export const Notes: React.FC<NotesProps> = ({ text }) => (
  <Callout>
    {text.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))}
  </Callout>
);
