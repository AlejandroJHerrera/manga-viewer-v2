import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { mangaDBAtom } from '../Atoms';

function ItemHeader() {
  const { id } = useParams();
  const manga = useRecoilValue(mangaDBAtom);
  const [mangaApi, setMangaApi] = useState('');
  const mangaIndex = manga.findIndex((el) => el.mal_id == id);

  useEffect(() => {
    const findManga = async () => {
      if (mangaIndex === -1) {
        try {
          let url = `https://api.jikan.moe/v4/manga/${id}/full`;
          const res = await axios.get(url);
          setMangaApi(res.data.data);
        } catch (error) {
          console.log(error);
        }
      }
    };

    findManga();
  }, [id, mangaIndex]);

  return (
    <div className="flex max-w-6xl mx-auto my-5 space-x-10">
      <div className="w-[280px]">
        <img
          src={
            manga[mangaIndex]?.images.webp.image_url ||
            mangaApi.images.webp.image_url
          }
          alt={manga[mangaIndex]?.title || mangaApi.title}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex-1 flex items-center justify-center flex-col ">
        <h1 className="text-4xl font-semibold mb-4">
          {manga[mangaIndex]?.title || mangaApi.title}
        </h1>
        <h2 className="text-xl font-semibold mb-4">
          {manga[mangaIndex]?.title_japanese || mangaApi.title_japanese}
        </h2>
        <article className="">
          {manga[mangaIndex]?.synopsis || mangaApi.synopsis}
        </article>
        <div className="space-x-10 mt-4">
          <span className="btn btn-sm bg-primary ">
            {manga[mangaIndex]?.authors[0].name || mangaApi.authors[0].name}
          </span>
          <span className="btn btn-sm bg-primary ">
            Chapters:
            {manga[mangaIndex]?.chapters || mangaApi.chapters || 'N/A'}
          </span>
          <span className="btn btn-sm bg-primary ">
            {manga[mangaIndex]?.status || mangaApi.status}
          </span>
        </div>
        {mangaApi ? (
          mangaApi.genres.map((el) => (
            <div className="mt-2" key={el.id}>
              <span className="btn btn-xs bg-primary">{el.name}</span>
            </div>
          ))
        ) : (
          <div className="mt-2">
            <span className="btn btn-xs bg-primary">
              {manga[mangaIndex].demographics[0].name}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemHeader;
