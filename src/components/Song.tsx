import React from "react";
import { Song as SongType } from "../containers/types";
import { Header } from "./Header";
import { ChordGrid } from "./ChordGrid";
import { Notes } from "./Notes";
import { Lyrics } from "./Lyrics";
import { ChordSchemas } from "./ChordSchemas";
import { References } from "./References";
import "./Song.scss";

interface SongProps {
  song: SongType;
}

export const Song: React.FC<SongProps> = ({ song }) => (
  <div className="wrapper">
    <header>
      <Header song={song} />
    </header>
    <article>
      <ChordGrid grid={song.grid} />
    </article>
    <aside>
      {song.lyrics && <Lyrics text={song.lyrics} />}
      {song.notes && <Notes text={song.notes} />}
      {song.schemas && <ChordSchemas schemas={song.schemas} />}
    </aside>
    <footer>
      {song.references && <References references={song.references} />}
    </footer>
  </div>
);
