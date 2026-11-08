export interface VerbAction {
  details?: string | string[];
  aheadScene?: string;
}

/** Actions keyed by verb name, e.g. explore, use, default. */
export type VerbSet = Record<string, VerbAction>;

export interface InteractableDef {
  name: string;
  image: string;
  x: number;
  y: number;
  width: number;
  height: number;
  verbs?: VerbSet;
}

export interface Scene {
  key: string;
  name: string;
  exits?: Record<string, string>;
  image: string;
  puzzle: string;
  details: string | string[];
  isMore?: boolean;
  interactables?: InteractableDef[];
  verbs?: Record<string, VerbSet>;
}

export interface PuzzleWord {
  key: string;
  name: string;
}
