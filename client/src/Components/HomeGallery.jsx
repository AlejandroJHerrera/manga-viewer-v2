import axios from 'axios';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { mangaDBAtom } from '../Atoms';
import Manga from './Manga';

function HomeGallery() {
  const [mangas, setMangas] = useRecoilState(mangaDBAtom);

  const fetchManga = async () => {
    let url = '/manga/';

    try {
      const res = await axios.get(url);
      setMangas(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchManga();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="carousel carousel-center h-60 lg:h-80 max-w-lg lg:max-w-2xl p-4 space-x-4 bg-gray-700 rounded-box mx-auto my-4">
      {mangas.slice(0, 20).map((manga) => (
        <Manga
          key={manga._id}
          author={manga.authors[0].name}
          chapters={manga.chapters}
          image={manga.images.webp.image_url}
          title={manga.title}
        />
      ))}
    </div>
  );
}

export default HomeGallery;
