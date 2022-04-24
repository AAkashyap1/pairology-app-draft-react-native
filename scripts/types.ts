export interface Person {
  uid: string;
  fullName: string;
  email: string;
  bio: string;

  submissionTimestamp: Timestamp;

  major: string;
  poolCategory: string;
  interests: string[];
  favTV: string[];
  favBooks: string[];

  // extScore
  laugh: number;
  attention: number;
  quiet: number;
  outgoing: number;
  friends: number;

  // openScore
  abstract: number;
  reflect: number;
  imagination: number;
  noArt: number;

  // other
  truth: number;
  leftRight: number;
  fit: number;
  plan: number;
  religion: number;
  eat: number;
  politicallyIncorrect: number;
  careOthersThink: number;
  highPaying: number;
  gutFeeling: number;
  socialJustice: number;
  jeffBezos: number;
  superstitious: number;

  polLeaning: number;

  instagram: string;
  facebook: string;
}