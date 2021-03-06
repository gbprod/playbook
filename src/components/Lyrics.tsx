import React from "react";
import { H3 } from "@blueprintjs/core";
import "./Lyrics.scss";

interface LyricsProps {
  text: Array<string[]>;
  fontSize: number;
}

export const Lyrics: React.FC<LyricsProps> = ({ text, fontSize }) => (
  <div>
    <H3>Paroles</H3>
    <div className="lyrics" style={{ fontSize: `${fontSize}px` }}>
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
