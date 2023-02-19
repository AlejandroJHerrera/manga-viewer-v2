import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Recomend() {
  const [recomend, setRecomend] = useState([]);

  const fetchReco = async () => {
    let url = `https://api.jikan.moe/v4/recommendations/manga?page=${Math.ceil(
      Math.random() * 20
    )}`;
    try {
      const res = await axios.get(url);
      setRecomend(res.data.data);
    } catch (error) {
      console.log(error, 'failed to recieve data');
    }
  };

  useEffect(() => {
    fetchReco();
  }, []);

  return (
    <div className="my-10 xl:ml-10">
      <div className="mb-5 text-sm">
        <h3 className="font-bold text-gray-400">Recomended mangas for you</h3>
      </div>
      {recomend.slice(0, 5).map((data, i) => (
        <NavLink to={`/manga/${data.entry[0].mal_id}`} key={i}>
          <div className="flex items-center justify-between mt-3 ">
            <img
              className="h-10 rounded-lg"
              src={data.entry[0].images.webp.image_url}
              alt={data.entry.title}
            />
            <div className="flex-1 ml-4">
              <p className="font-semibold text-sm">{data.entry[0].title}</p>
              <p className="text-sm text-gray-400 w-[230px]">
                Recomended by {data.user.username}
              </p>
            </div>
            <button className="font-semibold text-blue-400 text-sm">
              View!
            </button>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Recomend;
