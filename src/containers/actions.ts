import { SongItems, Song } from "./types";

export const loadSongs = async (): Promise<SongItems> => {
  const songs: SongItems = (await import(`./../data/songs.json`)).default;

  return songs;
};

export const loadSong = async (id: string): Promise<Song> => {
  const song: Song = (await import(`./../data/songs/${id}.json`)).default;

  return song;
};
