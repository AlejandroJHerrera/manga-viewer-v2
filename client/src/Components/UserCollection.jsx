import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../Atoms';

function UserCollection() {
  const [openFav, setOpenFav] = useState(true);
  const [openWL, setOpenWL] = useState(true);
  const [likes, setLikes] = useState([]);
  const [wl, setWL] = useState([]);
  const user = useRecoilValue(userAtom);

  const fetchLikes = async () => {
    try {
      const res = await axios.get(`/fav/user/${user.email}`);

      const allLikes = await Promise.all(
        res.data.map((el) => axios.get(`/manga/single/${el.mal_id}`))
      );
      setLikes(allLikes);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWL = async () => {
    try {
      const res = await axios.get(`/watchlist/${user.email}`);

      const allWl = await Promise.all(
        res.data.map((el) => axios.get(`/manga/single/${el.mal_id}`))
      );
      setWL(allWl);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLikes();
    fetchWL();
  }, []);

  return (
    <div className="">
      <div className="flex justify-evenly items-center max-w-3xl mt-80 ml-0 md:mx-auto ">
        <h1
          className={
            openFav
              ? 'text-semibold text-lg cursor-pointer border-b-[2px] border-b-primary-content  px-2 py-1 '
              : 'text-semibold text-lg cursor-pointer px-2 py-1'
          }
          onClick={() => setOpenFav(!openFav)}
        >
          Favourite
        </h1>
        <h1
          className={
            openWL
              ? 'text-semibold text-lg cursor-pointer border-b-[2px] border-b-primary-content px-2 py-1 '
              : 'text-semibold text-lg cursor-pointer px-2 py-1'
          }
          onClick={() => setOpenWL(!openWL)}
        >
          Watch List
        </h1>
      </div>

      {likes.length > 0 ? (
        <>
          {/* Favorites */}
          <div
            className={
              openFav
                ? 'max-w-3xl mx-auto ml-0 mt-10 lg:mx-auto'
                : 'max-w-3xl mx-auto ml-0 mt-10 hidden'
            }
          >
            <h1 className="text-xl text-center">
              Your favorite Mangas all in one place
            </h1>
            <div className=" space-y-5 mt-5 overflow-y-scroll h-96">
              {/* map likes */}
              {likes.map((el) => (
                <div
                  className="flex items-center justify-center space-x-5 mx-auto"
                  key={el.data[0]?.mal_id}
                >
                  <img
                    src={el.data[0]?.images.webp.small_image_url}
                    alt={el.data[0]?.title}
                    className="h-10 object-cover rounded-lg"
                  />
                  <p className="truncate w-48 ">{el.data[0]?.title}</p>
                  <button>delete</button>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* No Fav available */}
          <div className="max-w-3xl mx-auto  mt-10">
            <h1 className="text-xl text-center">
              Your favorite Mangas all in one place
            </h1>
            <div className=" flex justify-center items-center h-96">
              <h1 className="w-96 text-center">
                You haven't liked a Manga yet , go like some to view them here !
              </h1>
            </div>
          </div>
        </>
      )}

      {wl.length > 0 ? (
        <>
          {/* Watch List */}
          <div
            className={
              openWL
                ? 'max-w-3xl mx-auto ml-0 mt-10 pb-5 lg:mx-auto'
                : 'max-w-3xl mx-auto ml-0 mt-10 pb-5 hidden'
            }
          >
            <h1 className="text-xl text-center">Add Mangas to watch later!</h1>
            <div className=" space-y-5 mt-5 overflow-y-scroll h-96">
              {wl.map((el) => (
                <div
                  className="flex items-center justify-center space-x-5 mx-auto"
                  key={el.id}
                >
                  <img
                    src={el.data[0]?.images.webp.small_image_url}
                    alt={el.data[0]?.title}
                    className="h-10 object-cover rounded-lg"
                  />
                  <p className="truncate w-48 ">{el.data[0]?.title}</p>
                  <button>delete</button>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* No WL available  */}
          <div className="max-w-3xl mx-auto ml-2 mt-10 lg:mx-auto">
            <h1 className="text-xl text-center">Add Mangas to watch later!</h1>
            <div className=" flex justify-center items-center h-96">
              <h1 className="w-96 text-center">
                You haven't added Manga to your Watch list yet , go add some to
                view them here !
              </h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default UserCollection;
