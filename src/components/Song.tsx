import React, { useState } from "react";
import { Song as SongType } from "../containers/types";
import { Header } from "./Header";
import { ChordGrid } from "./ChordGrid";
import { Notes } from "./Notes";
import { Lyrics } from "./Lyrics";
import { ChordSchemas } from "./ChordSchemas";
import { References } from "./References";
import "./Song.scss";
import { Actions } from "./Actions";

interface SongProps {
  song: SongType;
}

export interface SongSettings {
  lyricsFontSize: number;
}

export const Song: React.FC<SongProps> = ({ song }) => {
  const [settings, setSettings] = useState<SongSettings>({
    lyricsFontSize: 14,
  });

  const onUpdate = (newSettings: SongSettings) => {
    console.log(settings.lyricsFontSize);
    setSettings(newSettings);
  };

  return (
    <div className="wrapper">
      <div className="song__actions">
        <Actions settings={settings} onUpdate={onUpdate} />
      </div>
      <header>
        <Header song={song} />
      </header>
      <article>
        <ChordGrid grid={song.grid} />
      </article>
      <aside>
        {song.lyrics && (
          <Lyrics text={song.lyrics} fontSize={settings.lyricsFontSize} />
        )}
      </aside>
      <footer>
        {song.notes && <Notes text={song.notes} />}
        {song.schemas && <ChordSchemas schemas={song.schemas} />}
        {song.references && <References references={song.references} />}
      </footer>
    </div>
  );
};
