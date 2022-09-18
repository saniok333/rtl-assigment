export enum SrcMapTypes {
  liggendBreed = 'liggend_breed',
  liggend = 'liggend',
  artikelTop = 'artikel_top',
  inlineSmall = 'inline_small',
}

export interface ISrcMapItem {
  breakPoint: string;
  src: string | undefined;
}
