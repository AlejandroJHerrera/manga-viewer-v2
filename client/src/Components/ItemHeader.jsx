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
      {!mangaApi ? (
        <>
          <div className="w-[280px]">
            <img
              src={manga[mangaIndex]?.images.webp.image_url}
              alt={manga[mangaIndex]?.title}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 flex items-center justify-center flex-col ">
            <h1 className="text-4xl font-semibold mb-4">
              {manga[mangaIndex]?.title}
            </h1>
            <h2 className="text-xl font-semibold mb-4">
              {manga[mangaIndex]?.title_japanese}
            </h2>
            <article className="">{manga[mangaIndex]?.synopsis}</article>
            <div className="space-x-10 mt-4">
              <span className="btn btn-sm bg-primary ">
                {manga[mangaIndex]?.authors[0].name || 'N/A'}
              </span>
              <span className="btn btn-sm bg-primary ">
                Chapters:
                {manga[mangaIndex]?.chapters || 'N/A'}
              </span>
              <span className="btn btn-sm bg-primary ">
                {manga[mangaIndex]?.status}
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-[280px]">
            <img
              src={mangaApi.images?.webp.image_url}
              alt={mangaApi.title}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex-1 flex items-center justify-center flex-col ">
            <h1 className="text-4xl font-semibold mb-4">{mangaApi.title}</h1>
            <h2 className="text-xl font-semibold mb-4">
              {mangaApi.title_japanese}
            </h2>
            <article className="">{mangaApi.synopsis}</article>
            <div className="space-x-10 mt-4">
              {mangaApi &&
                mangaApi.authors.map((el, i) => (
                  <span className="btn btn-sm bg-primary " key={i}>
                    {el.name}
                  </span>
                ))}

              <span className="btn btn-sm bg-primary ">
                Chapters:
                {mangaApi.chapters || 'N/A'}
              </span>
              <span className="btn btn-sm bg-primary ">{mangaApi.status}</span>
            </div>
            <div className="mt-2 flex space-x-2">
              {mangaApi &&
                mangaApi.genres.map((el, i) => (
                  <span className="btn btn-xs bg-primary" key={i}>
                    {el.name}
                  </span>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ItemHeader;
