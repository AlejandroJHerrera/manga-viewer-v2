import React, { useState } from 'react';

function UserCollection() {
  const [openFav, setOpenFav] = useState(false);
  const [openWL, setOpenWL] = useState(false);

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

      {/* Favorites */}
      <div
        className={
          openFav
            ? 'max-w-3xl mx-auto ml-0 mt-10'
            : 'max-w-3xl mx-auto ml-0 mt-10 hidden'
        }
      >
        <h1 className="text-xl text-center">
          Your favorite Mangas all in one place
        </h1>
        <div className=" space-y-5 mt-5 overflow-y-scroll h-96">
          <div className="flex items-center justify-center space-x-5 mx-auto">
            <img
              src="./eclipse.jpg"
              alt=""
              className="h-10 object-cover rounded-lg"
            />
            <p className="truncate w-48 ">Berserk</p>
            <button>delete</button>
          </div>
          <div className="flex items-center justify-center space-x-5 mx-auto">
            <img
              src="./eclipse.jpg"
              alt=""
              className="h-10 object-cover rounded-lg"
            />
            <p className="truncate w-48 ">Berserk</p>
            <button>delete</button>
          </div>
          <div className="flex items-center justify-center space-x-5 mx-auto">
            <img
              src="./eclipse.jpg"
              alt=""
              className="h-10 object-cover rounded-lg"
            />
            <p className="truncate w-48">Berserk</p>
            <button>delete</button>
          </div>
          <div className="flex items-center justify-center space-x-5 mx-auto">
            <img
              src="./eclipse.jpg"
              alt=""
              className="h-10 object-cover rounded-lg"
            />
            <p className="truncate w-48">Berserk</p>
            <button>delete</button>
          </div>
          <div className="flex items-center justify-center space-x-5 mx-auto">
            <img
              src="./eclipse.jpg"
              alt=""
              className="h-10 object-cover rounded-lg"
            />
            <p className="truncate w-48">Berserk</p>
            <button>delete</button>
          </div>{' '}
          <div className="flex items-center justify-center space-x-5 mx-auto">
            <img
              src="./eclipse.jpg"
              alt=""
              className="h-10 object-cover rounded-lg"
            />
            <p className="truncate w-48">Berserk</p>
            <button>delete</button>
          </div>{' '}
          <div className="flex items-center justify-center space-x-5 mx-auto">
            <img
              src="./eclipse.jpg"
              alt=""
              className="h-10 object-cover rounded-lg"
            />
            <p className="truncate w-48">Berserk</p>
            <button>delete</button>
          </div>{' '}
          <div className="flex items-center justify-center space-x-5 mx-auto">
            <img
              src="./eclipse.jpg"
              alt=""
              className="h-10 object-cover rounded-lg"
            />
            <p className="truncate w-48">Berserk</p>
            <button>delete</button>
          </div>{' '}
          <div className="flex items-center justify-center space-x-5 mx-auto">
            <img
              src="./eclipse.jpg"
              alt=""
              className="h-10 object-cover rounded-lg"
            />
            <p className="truncate w-48">Berserk</p>
            <button>delete</button>
          </div>
        </div>
      </div>

      {/* No Fav available */}
      <div
        className={
          openFav
            ? 'max-w-3xl mx-auto ml-0 mt-10'
            : 'max-w-3xl mx-auto ml-0 mt-10 hidden'
        }
      >
        <h1 className="text-xl text-center">
          Your favorite Mangas all in one place
        </h1>
        <div className=" flex justify-center items-center h-96">
          <h1 className="w-96 text-center">
            You haven't liked a Manga yet , go like some to view them here !
          </h1>
        </div>
      </div>

      {/* No WL available  */}

      <div
        className={
          openWL
            ? 'max-w-3xl mx-auto ml-2 mt-10'
            : 'max-w-3xl mx-auto ml-0 mt-10 hidden'
        }
      >
        <h1 className="text-xl text-center">Add Mangas to watch later!</h1>
        <div className=" flex justify-center items-center h-96">
          <h1 className="w-96 text-center">
            You haven't added Manga to your Watch list yet , go add some to view
            them here !
          </h1>
        </div>
      </div>

      {/* Watch List */}
      <div
        className={
          openWL
            ? 'max-w-3xl mx-auto ml-0 mt-10 pb-5'
            : 'max-w-3xl mx-auto ml-0 mt-10 pb-5 hidden'
        }
      >
        <h1 className="text-xl text-center">Add Mangas to watch later!</h1>
        <div className=" space-y-5 mt-5 overflow-y-scroll h-96">
          <div className="flex items-center justify-center space-x-5 mx-auto">
            <img
              src="./eclipse.jpg"
              alt=""
              className="h-10 object-cover rounded-lg"
            />
            <p className="truncate w-48 ">Berserk</p>
            <button>delete</button>
          </div>
          <div className="flex items-center justify-center space-x-5 mx-auto">
            <img
              src="./eclipse.jpg"
              alt=""
              className="h-10 object-cover rounded-lg"
            />
            <p className="truncate w-48 ">Berserk</p>
            <button>delete</button>
          </div>
          <div className="flex items-center justify-center space-x-5 mx-auto">
            <img
              src="./eclipse.jpg"
              alt=""
              className="h-10 object-cover rounded-lg"
            />
            <p className="truncate w-48">Berserk</p>
            <button>delete</button>
          </div>
          <div className="flex items-center justify-center space-x-5 mx-auto">
            <img
              src="./eclipse.jpg"
              alt=""
              className="h-10 object-cover rounded-lg"
            />
            <p className="truncate w-48">Berserk</p>
            <button>delete</button>
          </div>
          <div className="flex items-center justify-center space-x-5 mx-auto">
            <img
              src="./eclipse.jpg"
              alt=""
              className="h-10 object-cover rounded-lg"
            />
            <p className="truncate w-48">Berserk</p>
            <button>delete</button>
          </div>{' '}
          <div className="flex items-center justify-center space-x-5 mx-auto">
            <img
              src="./eclipse.jpg"
              alt=""
              className="h-10 object-cover rounded-lg"
            />
            <p className="truncate w-48">Berserk</p>
            <button>delete</button>
          </div>{' '}
          <div className="flex items-center justify-center space-x-5 mx-auto">
            <img
              src="./eclipse.jpg"
              alt=""
              className="h-10 object-cover rounded-lg"
            />
            <p className="truncate w-48">Berserk</p>
            <button>delete</button>
          </div>{' '}
          <div className="flex items-center justify-center space-x-5 mx-auto">
            <img
              src="./eclipse.jpg"
              alt=""
              className="h-10 object-cover rounded-lg"
            />
            <p className="truncate w-48">Berserk</p>
            <button>delete</button>
          </div>{' '}
          <div className="flex items-center justify-center space-x-5 mx-auto">
            <img
              src="./eclipse.jpg"
              alt=""
              className="h-10 object-cover rounded-lg"
            />
            <p className="truncate w-48">Berserk</p>
            <button>delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCollection;
