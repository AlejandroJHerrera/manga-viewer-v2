import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { modalAtom, userAtom } from '../Atoms';
import UpdateInfoModal from './UpdateInfoModal';

function ProfileInfo() {
  const user = useRecoilValue(userAtom);
  const openModal = useSetRecoilState(modalAtom);
  return (
    <div className="flex items-center justify-center bg-gradient-to-tl from-violet-500 to-fuchsia-500">
      <div className="flex justify-center items-center flex-col space-y-9  md:flex-row md:space-x-20 bg-gray-500 rounded-md p-6 my-5  md:my-9 shadow-2xl shadow-black">
        <div className=" space-y-4 flex flex-col items-center">
          {/* profile photo */}
          <img
            src={
              user ? user.avatar : '"https://i.ibb.co/MBtjqXQ/no-avatar.gif"'
            }
            alt="img not found"
            className="rounded-lg h-20"
          />
          <button
            className="text-center bg-red-500 text-white hover:bg-red-600 cursor-pointer py-2 px-9 rounded-lg "
            onClick={() => openModal(true)}
          >
            Update
          </button>
        </div>
        <div className="flex flex-col justify-center mx-0 text-slate-300 font-semibold">
          {/* user information */}
          <h1 className="text-2xl">
            {user.name} {user.lastName}
          </h1>
          <span className="text-md">{user.country}</span>
          <span className="text-md">{user.birthday}</span>
          <span className="text-md">{user.language}</span>
        </div>
      </div>
      <UpdateInfoModal />
    </div>
  );
}

export default ProfileInfo;
