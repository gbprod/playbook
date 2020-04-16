import React from "react";
import { H3 } from "@blueprintjs/core";

interface NotesProps {
  text: string[];
}

export const Notes: React.FC<NotesProps> = ({ text }) => (
  <div className="notes">
    <H3>Notes</H3>
    {text.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))}
  </div>
);
