import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlinePlusCircle,
  AiOutlineCheckCircle,
} from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../Atoms';

function LikeAndAdd() {
  const [liked, setLiked] = useState(false);
  const [watched, setWatched] = useState(null);
  const user = useRecoilValue(userAtom);
  const { id } = useParams();

  const verifyLike = async () => {
    try {
      const res = await axios.get(`/fav/user/${user.email}`);
      let result = res.data.findIndex((e) => e.mal_id == id);
      if (result !== -1) setLiked(true);
    } catch (error) {
      console.log('Could not verify likes');
    }
  };
  const verifyWatch = async () => {
    try {
      const res = await axios.get(`/watchlist/${user.email}`);
      let result = res.data.findIndex((e) => e.mal_id == id);
      if (result !== -1) setWatched(true);
    } catch (error) {
      console.log('Could not verify likes');
    }
  };

  const hasWatched = async () => {
    if (watched === false) {
      try {
        await axios.post('/watchlist/', {
          mal_id: id,
          email: user.email,
        });
        setWatched(true);
      } catch (error) {
        console.log("Item couldn't be added");
      }
    } else {
      try {
        await axios.delete('/watchlist/item/', {
          data: { mal_id: id },
        });

        setWatched(false);
      } catch (error) {
        console.log("Item couldn't be deleted");
      }
    }
  };

  const hasLiked = async () => {
    if (liked === false) {
      try {
        const res = await axios.post('/fav/', {
          mal_id: id,
          email: user.email,
        });
        console.log(res.data);
        setLiked(true);
      } catch (error) {
        console.log("like couldn't be saved");
      }
    } else {
      try {
        const res = await axios.delete('/fav/', {
          data: { email: user.email },
        });
        console.log(res.data);
        setLiked(false);
      } catch (error) {
        console.log("like couldn't be deleted");
      }
    }
  };

  useEffect(() => {
    verifyLike();
    verifyWatch();
  });

  return (
    <div>
      <div className="flex justify-center items-center mx-auto w-full space-x-5">
        {liked ? (
          <>
            <h1>Remove from favourites!</h1>
            <AiFillHeart
              className="text-3xl text-red-600 cursor-pointer"
              onClick={hasLiked}
            />
          </>
        ) : (
          <>
            <h1>Add to favourites!</h1>
            <AiOutlineHeart
              className="text-3xl  cursor-pointer"
              onClick={hasLiked}
            />
          </>
        )}

        {!watched ? (
          <>
            <h1>Add to watch list!</h1>
            <AiOutlinePlusCircle
              className="text-3xl  cursor-pointer"
              onClick={hasWatched}
            />
          </>
        ) : (
          <>
            <h1>Remove form watch list!</h1>
            <AiOutlineCheckCircle
              className="text-3xl  text-green-500 cursor-pointer"
              onClick={hasWatched}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default LikeAndAdd;
