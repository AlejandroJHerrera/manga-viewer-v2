import React from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../Atoms';
import HomeGallery from '../Components/HomeGallery';
import Recomend from '../Components/Recomend';

export default function Home() {
  const user = useRecoilValue(userAtom);
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      <section className="md:col-span-2">
        <h1>Hi {user ? user.name : 'anon'} </h1>
        {/* All mangas */}
        <HomeGallery />
      </section>
      <section className="hidden md:inline-grid md:col-span-1">
        <div className="fixed lg:w-[380px] w-[180px]">
          {/* recomended manga */}
          <Recomend />
          {/* trending manga */}
          <h1>this is the suggestions</h1>
        </div>
      </section>
    </main>
  );
}
