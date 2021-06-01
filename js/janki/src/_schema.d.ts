// Copyright (c) 2021 University System of Georgia and janki contributors
// Distributed under the terms of the BSD-3-Clause License.
/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Configure Janki spaced-repetition cards
 */
export type CardCollections = JankiSettings;

/**
 * user-configured settings
 */
export interface JankiSettings {
  /**
   * Ephemeral collections not saved in files
   */
  collections?: Collection[];
  [k: string]: unknown;
}
export interface Collection {
  cards: {
    [k: string]: Card;
  };
  col: {
    [k: string]: CollectionMetadata;
  };
  notes: {
    [k: string]: Note;
  };
  path: string;
  revlog?: {
    [k: string]: Rev;
  };
}
export interface Card {
  data: string;
  did: number;
  due: number;
  factor: number;
  flags: number;
  id: number;
  ivl: number;
  lapses: number;
  left: number;
  mod: number;
  nid: number;
  odid: number;
  odue: number;
  ord: number;
  queue: number;
  reps: number;
  type: number;
  usn: number;
}
export interface CollectionMetadata {
  conf: ReviewConfiguration;
  crt: number;
  dconf: {
    [k: string]: DeckConfiguration;
  };
  decks: {
    [k: string]: Deck;
  };
  dty: number;
  id: number;
  ls: number;
  mod: number;
  models: {
    [k: string]: Model;
  };
  scm: number;
  tags: {
    [k: string]: unknown;
  };
  usn: number;
  ver: number;
}
export interface ReviewConfiguration {
  activeDecks?: number[];
  addToCur?: boolean;
  collapseTime?: number;
  curDeck?: number;
  curModel?: string;
  dueCounts?: boolean;
  estTimes?: boolean;
  newBury?: boolean;
  newSpread?: number;
  nextPos?: number;
  sortBackwards?: boolean;
  sortType?: string;
  timeLim?: number;
}
export interface DeckConfiguration {
  autoplay: boolean;
  id: number;
  lapse: Lapse;
  maxTaken: number;
  mod: number;
  name: string;
  new: New;
  replayq: boolean;
  rev: ReviewConfiguration1;
  timer: number;
  usn: number;
}
export interface Lapse {
  delays: number[];
  leechAction: number;
  leechFails: number;
  minInt: number;
  mult: number;
}
export interface New {
  bury: boolean;
  delays: number[];
  initialFactor: number;
  ints: number[];
  order: number;
  perDay: number;
  separate: boolean;
}
export interface ReviewConfiguration1 {
  bury: boolean;
  ease4: number;
  fuzz: number;
  ivlFct: number;
  maxIvl: number;
  minSpace: number;
  perDay: number;
}
export interface Deck {
  collapsed: boolean;
  conf: number;
  desc: string;
  dyn: number;
  extendNew: number;
  extendRev: number;
  id: number;
  lrnToday: number[];
  mod: number;
  name: string;
  newToday: number[];
  revToday: number[];
  timeToday: number[];
  usn: number;
}
export interface Model {
  css: string;
  did: number;
  flds: Field[];
  id: number;
  latexPost: string;
  latexPre: string;
  mod: number;
  name: string;
  req: ((number | string) | number[])[][];
  sortf: number;
  tags: unknown[];
  tmpls: Template[];
  type: number;
  usn: number;
  vers: unknown[];
}
export interface Field {
  font: string;
  media: unknown[];
  name: string;
  ord: number;
  rtl: boolean;
  size: number;
  sticky: boolean;
}
export interface Template {
  afmt: string;
  bafmt: string;
  bqfmt: string;
  did: null;
  name: string;
  ord: number;
  qfmt: string;
}
export interface Note {
  csum: number;
  data: string;
  flags: number;
  flds: string;
  guid: string;
  id: number;
  mid: number;
  mod: number;
  sfld: string;
  tags: string;
  usn: number;
}
export interface Rev {
  cid: number;
  ease: number;
  factor: number;
  id: number;
  ivl: number;
  lastIvl: number;
  time: number;
  type: number;
  usn: number;
}
