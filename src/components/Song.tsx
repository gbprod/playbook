import React from "react";
import { Song as SongType } from "../containers/types";
import { Header } from "./Header";
import { ChordGrid } from "./ChordGrid";
import { Notes } from "./Notes";
import { Lyrics } from "./Lyrics";
import { ChordSchemas } from "./ChordSchemas";
import { References } from "./References";

interface SongProps {
  song: SongType;
}

export const Song: React.FC<SongProps> = ({ song }) => (
  <div>
    <Header song={song} />
    <ChordGrid grid={song.grid} />
    <div>
      {song.notes && <Notes text={song.notes} />}
      {song.schemas && <ChordSchemas schemas={song.schemas} />}
      {song.lyrics && <Lyrics text={song.lyrics} />}
    </div>
    <footer>
      {song.references && <References references={song.references} />}
    </footer>
  </div>
);
