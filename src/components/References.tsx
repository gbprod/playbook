import React from "react";
import { H5 } from "@blueprintjs/core";

interface ReferencesProps {
  references: string[];
}

export const References: React.FC<ReferencesProps> = ({ references }) => (
  <div>
    <H5>Références</H5>
    <ul>
      {references.map(function (reference, index) {
        return (
          <li key={index}>
            <a href={reference} target="_blank" rel="noopener noreferrer">
              {reference}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);
