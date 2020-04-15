export type SongItem = {
  id: string;
  title: string;
  artist: string;
};

export type SongItems = Array<SongItem>;

export type Song = {
  title: string;
  artist: string;
  capo: number;
  notes: string[];
  references: string[];
  grid: Grid;
  schemas: Schema[];
  lyrics: Array<string[]>;
};

export type Schema = {
  name: string;
  frets: string;
};

export type Grid = {
  phrases: Phrase[];
};

export type Phrase = {
  name: string;
  beats: number;
  bars: Bar[];
};

export type Bar = {
  beats?: number;
  chords: BarChord[];
};

export type BarChord = {
  name: string;
  beats: number;
};
