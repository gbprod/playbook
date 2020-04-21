import { SongItems, Song, SongSettings } from "./types";

export const loadSongs = async (): Promise<SongItems> => {
  const songs: SongItems = (await import(`./../data/songs.json`)).default;

  return songs;
};

export const loadSong = async (id: string): Promise<Song> => {
  const song: Song = (await import(`./../data/songs/${id}.json`)).default;

  return song;
};

const defaultSettings: SongSettings = {
  smallGrid: false,
  lyricsFontSize: 16,
  gridVisible: true,
  lyricsVisible: true,
  notesVisible: true,
  chordsVisible: true,
  referencesVisible: false,
};

export const getSettings = (id: string): SongSettings => {
  const settings = localStorage.getItem(`settings-${id}`);

  if (null === settings) {
    return defaultSettings;
  }

  return (JSON.parse(settings) || defaultSettings) as SongSettings;
};

export const saveSettings = (id: string, settings: SongSettings): void => {
  localStorage.setItem(`settings-${id}`, JSON.stringify(settings));
};
