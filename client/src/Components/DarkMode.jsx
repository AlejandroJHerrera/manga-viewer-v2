import React, { useEffect, useState } from 'react';
import { MdLightMode } from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { themeAtom } from '../Atoms';

function DarkMode() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useRecoilState(themeAtom);

  useEffect(() => setMounted(true), []);

  return (
    mounted &&
    (theme === 'halloween' ? (
      <MdLightMode
        className="text-2xl hover:text-primary"
        onClick={() => setTheme('winter')}
      />
    ) : (
      <BsFillMoonFill
        className="text-2xl hover:text-primary"
        onClick={() => setTheme('halloween')}
      />
    ))
  );
}

export default DarkMode;
