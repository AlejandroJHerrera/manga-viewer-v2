import axios from 'axios';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../Atoms';
import DarkMode from './DarkMode';

export default function Navbar() {
  const user = useRecoilValue(userAtom);
  const navigate = useNavigate();

  const signOut = async () => {
    try {
      const res = await axios.get('/auth/logout');
      console.log(res.data);
      localStorage.removeItem('token');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar  max-w-6xl mx-auto py-2 sticky top-0 z-30   bg-base-100">
      <div className="flex-1">
        <NavLink
          to={'/home'}
          className=" btn btn-primary  normal-case text-xl "
        >
          MangaViewer
        </NavLink>
      </div>
      <div className="flex-none gap-2">
        <div className="btn btn-primary">
          <NavLink>Library</NavLink>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search.."
            className="input input-bordered focus:border-secondary"
          />
        </div>
        <div className="mx-auto">
          <DarkMode />
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src={
                  user ? user.avatar : 'https://i.ibb.co/MBtjqXQ/no-avatar.gif'
                }
                alt="Not available"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52 border-b border-base-300"
          >
            {user ? (
              <>
                <li>
                  <NavLink to={'/user'}>Profile</NavLink>
                </li>
                <li>
                  <NavLink onClick={signOut}>Logout</NavLink>
                </li>
              </>
            ) : (
              <li>
                <NavLink to={'/'}>Sign in</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
