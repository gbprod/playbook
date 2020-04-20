import { H2, Tag } from "@blueprintjs/core";
import React from "react";
import { Song } from "../containers/types";
import "./Header.scss";
import { SongSettings } from "./Song";
import { Notes } from "./Notes";
import { ChordSchemas } from "./ChordSchemas";

interface HeaderProps {
  song: Song;
  settings: SongSettings;
}

export const Header: React.FC<HeaderProps> = ({ song, settings }) => (
  <div className="Header">
    <H2>
      {song.title} - {song.artist}
    </H2>

    {song.notes && settings.notesVisible && (
      <div className="Header__notes">
        <Notes text={song.notes} />
      </div>
    )}

    <div className="Header__subtitle">
      {(song.capo || song.tunning) && (
        <div className="Header__tags">
          {song.capo && <Tag className="Header__tag">Capo {song.capo}</Tag>}
          {song.tunning && (
            <Tag className="Header__tag">Tunning {song.tunning}</Tag>
          )}
        </div>
      )}
      {song.schemas && settings.chordsVisible && (
        <div className="Header__schemas">
          <ChordSchemas schemas={song.schemas} />
        </div>
      )}
    </div>
  </div>
);
