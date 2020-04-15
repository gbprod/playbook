import React from "react";
import { Grid } from "../containers/types";
import { Phrase } from "./Phrase";

interface ChordGridProps {
  grid: Grid;
}

export const ChordGrid: React.FC<ChordGridProps> = ({ grid }) => (
  <div className="chord-grid">
    {grid.phrases.map((phrase, key) => (
      <Phrase phrase={phrase} key={key} />
    ))}
  </div>
);
