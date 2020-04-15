import React from "react";
import { SongItems } from "../containers/types";
import { UL } from "@blueprintjs/core";
import { Link } from "react-router-dom";

export const SongList: React.FC<{ songs: SongItems }> = ({ songs }) => {
  return (
    <UL>
      {songs
        .sort((a, b) => a.title.localeCompare(b.artist))
        .map((song, key) => (
          <li key={key}>
            <Link to={`song/${song.id}`}>{song.title}</Link>
          </li>
        ))}
    </UL>
  );
};
