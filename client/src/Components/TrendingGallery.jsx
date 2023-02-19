import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Manga from './Manga';

function TrendingGallery() {
  const [mangas, setMangas] = useState([]);

  const fetchTrendingManga = async () => {
    let url = 'https://api.jikan.moe/v4/top/manga';
    try {
      const res = await axios.get(url);
      setMangas(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrendingManga();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="carousel carousel-center h-60 lg:h-96 max-w-lg lg:max-w-2xl p-4 space-x-4  rounded-box mx-auto my-4">
      {mangas.map((manga) => (
        <Manga
          key={manga._id}
          id={manga.mal_id}
          image={manga.images.webp.image_url}
          title={manga.title}
        />
      ))}
    </div>
  );
}

export default TrendingGallery;
