import React from "react";
import { H5 } from "@blueprintjs/core";

interface LyricsProps {
  text: Array<string[]>;
}

export const Lyrics: React.FC<LyricsProps> = ({ text }) => (
  <div>
    <H5>Paroles</H5>
    <div>
      {text.map((paragraphe, index) => (
        <p key={index}>
          {paragraphe.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      ))}
    </div>
  </div>
);
