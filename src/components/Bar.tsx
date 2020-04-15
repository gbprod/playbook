import React from "react";
import { Bar as BarType } from "../containers/types";

interface BarProps {
  bar: BarType;
  defaultBeats: number;
}

export const Bar: React.FC<BarProps> = ({ bar, defaultBeats }) => {
  let chords: Array<JSX.Element> = [];
  let starts = 0;

  bar.chords.forEach((chord) => {
    chords.push(
      <div
        key={starts}
        className={`bar-chord starts-${starts} beats-${chord.beats}`}
      >
        <span className="chord">{chord.name}</span>
      </div>
    );
    starts += chord.beats;
  });

  return <div className={`bar bar-${bar.beats ?? defaultBeats}`}>{chords}</div>;
};

export default Bar;
