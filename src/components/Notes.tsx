import React from "react";
import { H5 } from "@blueprintjs/core";

interface NotesProps {
  text: string[];
}

export const Notes: React.FC<NotesProps> = ({ text }) => (
  <div className="notes">
    <H5>Notes</H5>
    {text.map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))}
  </div>
);
