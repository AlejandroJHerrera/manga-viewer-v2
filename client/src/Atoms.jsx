import { atom, selector } from 'recoil';

export const userAtom = atom({
  key: 'user',
  default: null,
});

export const fetchUserSelector = selector({
  key: 'fetchUser',
  get: ({ get }) => {
    const userInfo = get(userAtom);
    userInfo
      ? localStorage.setItem('userData', JSON.stringify(userInfo))
      : localStorage.setItem(
          'userData',
          JSON.stringify({ name: null, lastName: null, email: null })
        );
    return userInfo;
  },
});
