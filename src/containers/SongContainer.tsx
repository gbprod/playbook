import React, { useState, useEffect } from "react";
import { loadSong, saveSettings, getSettings } from "./actions";
import { Song as ISong, SongSettings } from "./types";
import { useParams } from "react-router-dom";
import { Song } from "../components";

interface SongContainerParams {
  id: string;
}

export const SongContainer: React.FC<{}> = () => {
  const [song, setSong] = useState<ISong>();
  const { id } = useParams<SongContainerParams>();
  const [settings, setSettings] = useState<SongSettings>(getSettings(id));

  useEffect(() => {
    loadSong(id).then((values: ISong) => {
      setSong(values);
    });
  }, [id]);

  const updateSettings = (settings: SongSettings) => {
    saveSettings(id, settings);
    setSettings(settings);
  };

  return (
    <>
      {song && settings && (
        <Song song={song} settings={settings} updateSettings={updateSettings} />
      )}
    </>
  );
};
