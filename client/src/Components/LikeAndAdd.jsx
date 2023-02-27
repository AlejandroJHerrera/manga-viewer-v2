import axios from 'axios';
import React, { useState } from 'react';
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

  const hasWatched = async () => {
    if (!watched) {
      try {
        const res = await axios.post('/watchlist/', {
          mal_id: id,
          email: user.email,
        });
        console.log(res.data);
        setWatched(true);
      } catch (error) {
        console.log("Item couldn't be added");
      }
    } else {
      try {
        const res = await axios.delete('/watchlist/item/', {
          data: { mal_id: id },
        });
        console.log(res.data);
        setWatched(false);
      } catch (error) {
        console.log("Item couldn't be deleted");
      }
    }
  };

  const hasLiked = async () => {
    if (!liked) {
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

  return (
    <div>
      <div className="flex justify-center items-center mx-auto w-full space-x-5">
        {liked ? (
          <AiFillHeart
            className="text-3xl text-red-600 cursor-pointer"
            onClick={hasLiked}
          />
        ) : (
          <AiOutlineHeart
            className="text-3xl  cursor-pointer"
            onClick={hasLiked}
          />
        )}

        {!watched ? (
          <AiOutlinePlusCircle
            className="text-3xl  cursor-pointer"
            onClick={hasWatched}
          />
        ) : (
          <AiOutlineCheckCircle
            className="text-3xl  text-green-500 cursor-pointer"
            onClick={hasWatched}
          />
        )}
      </div>
    </div>
  );
}

export default LikeAndAdd;
