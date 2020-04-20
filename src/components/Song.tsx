import React, { useState } from "react";
import { Song as SongType } from "../containers/types";
import { Actions } from "./Actions";
import { ChordGrid } from "./ChordGrid";
import { Header } from "./Header";
import { Lyrics } from "./Lyrics";
import { References } from "./References";
import "./Song.scss";

interface SongProps {
  song: SongType;
}

export interface SongSettings {
  smallGrid: boolean;
  lyricsFontSize: number;
  gridVisible: boolean;
  lyricsVisible: boolean;
  notesVisible: boolean;
  chordsVisible: boolean;
  referencesVisible: boolean;
}

export const Song: React.FC<SongProps> = ({ song }) => {
  const [settings, setSettings] = useState<SongSettings>({
    smallGrid: false,
    lyricsFontSize: 16,
    gridVisible: true,
    lyricsVisible: true,
    notesVisible: true,
    chordsVisible: true,
    referencesVisible: false,
  });

  const onUpdate = (newSettings: SongSettings) => {
    setSettings(newSettings);
  };

  return (
    <div className="song_wrapper">
      <div className="actions">
        <Actions settings={settings} onUpdate={onUpdate} />
      </div>
      <header>
        <Header song={song} settings={settings} />
      </header>
      {settings.gridVisible && (
        <article>
          <ChordGrid grid={song.grid} small={settings.smallGrid} />
        </article>
      )}
      {settings.lyricsVisible && (
        <aside>
          {song.lyrics && (
            <Lyrics text={song.lyrics} fontSize={settings.lyricsFontSize} />
          )}
        </aside>
      )}
      {song.references && settings.referencesVisible && (
        <footer>
          <References references={song.references} />
        </footer>
      )}
    </div>
  );
};
