import { atom } from 'recoil';

export const userAtom = atom({
  key: 'user',
  default: JSON.parse(localStorage.getItem('token')) || null,
});

export const modalAtom = atom({
  key: 'modal',
  default: false,
});

export const mangaDBAtom = atom({
  key: 'mangaDb',
  default: [],
});

export const themeAtom = atom({
  key: 'theme',
  default: 'winter',
});
