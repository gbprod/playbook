import React, { useState, useEffect } from "react";
import { loadSongs } from "./actions";
import { SongItems } from "./types";
import { SongList } from "../components";

export const SongListContainer: React.FC<{}> = () => {
  const [songs, setSongs] = useState<SongItems>([]);

  useEffect(() => {
    loadSongs().then((values: SongItems) => {
      setSongs(values);
    });
  }, []);

  return <SongList songs={songs} />;
};
