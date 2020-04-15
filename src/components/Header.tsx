import { H2, Tag } from "@blueprintjs/core";
import React from "react";
import { Song } from "../containers/types";

interface HeaderProps {
  song: Song;
}

export const Header: React.FC<HeaderProps> = ({ song }) => (
  <header>
    <H2>
      {song.title} - {song.artist}
    </H2>
    {song.capo && <Tag>Capo {song.capo}</Tag>}
  </header>
);
