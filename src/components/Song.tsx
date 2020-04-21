import React from "react";
import { Song as SongType, SongSettings } from "../containers/types";
import { Actions } from "./Actions";
import { ChordGrid } from "./ChordGrid";
import { Header } from "./Header";
import { Lyrics } from "./Lyrics";
import { References } from "./References";
import "./Song.scss";

interface SongProps {
  song: SongType;
  settings: SongSettings;
  updateSettings: (settings: SongSettings) => void;
}

export const Song: React.FC<SongProps> = ({
  song,
  settings,
  updateSettings,
}) => {
  const onUpdate = (newSettings: SongSettings) => {
    updateSettings(newSettings);
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
