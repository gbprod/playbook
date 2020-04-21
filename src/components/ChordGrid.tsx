import React from "react";
import { Grid } from "../containers/types";
import { Phrase } from "./Phrase";
import clsx from "clsx";
import "./ChordGrid.scss";

interface ChordGridProps {
  grid: Grid;
  small: boolean;
}

export const ChordGrid: React.FC<ChordGridProps> = ({ grid, small }) => (
  <div className={clsx("chord-grid", small && "small")}>
    {grid.phrases.map((phrase, key) => (
      <Phrase phrase={phrase} key={key} />
    ))}
  </div>
);
