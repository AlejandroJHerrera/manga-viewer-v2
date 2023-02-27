import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { modalAtom, themeAtom, userAtom } from '../Atoms';
import UpdateInfoModal from './UpdateInfoModal';
import Moment from 'react-moment';

function ProfileInfo() {
  const user = useRecoilValue(userAtom);
  const theme = useRecoilValue(themeAtom);
  const openModal = useSetRecoilState(modalAtom);

  return (
    <div className="flex items-center justify-center relative bg-[url('https://i.pinimg.com/originals/80/95/bb/8095bba9e0a5068d383b827ca05fabb3.jpg')] object-cover bg-cover bg-no-repeat h-60 w-[480px] md:w-screen ">
      <div className="flex justify-center items-center flex-col space-y-9  md:flex-row md:space-x-20 rounded-md p-6 my-5  md:my-9 shadow-2xl  absolute top-28 ">
        <div className=" space-y-4 flex flex-col items-center">
          {/* profile photo */}
          <img
            src={
              user ? user.avatar : '"https://i.ibb.co/MBtjqXQ/no-avatar.gif"'
            }
            alt="img not found"
            className="rounded-full h-40 object-cover lg:h-52"
          />
          <button
            className={
              theme === 'winter'
                ? 'text-center bg-primary text-white hover:bg-primary-focus cursor-pointer py-2 px-9 rounded-lg '
                : 'text-center bg-primary text-black hover:bg-primary-focus cursor-pointer py-2 px-9 rounded-lg '
            }
            onClick={() => openModal(true)}
          >
            Update
          </button>
        </div>
        <div
          className={
            theme === 'winter'
              ? 'flex flex-col justify-center mx-0 text-slate-800  '
              : 'flex flex-col justify-center mx-0  '
          }
        >
          {/* user information */}
          <h1 className="text-2xl">
            {user.name} {user.lastName}
          </h1>
          <span className="text-md">{user.country}</span>
          <Moment format="DD/MM/YYYY" className="text-md">
            {user.birthday}
          </Moment>
          <span className="text-md">{user.language}</span>
        </div>
      </div>
      <UpdateInfoModal />
    </div>
  );
}

export default ProfileInfo;
